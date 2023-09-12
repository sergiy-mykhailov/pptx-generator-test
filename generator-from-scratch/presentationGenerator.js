const path = require('path')
const { createFile, copyFile, createDir, removeDir, zipFiles } = require('./utils/files')
const { buildXml } = require('./utils/xml')
const { RELATINSHIP_TYPE, CONTENT_TYPE } = require('./constants/common')
const { globalRels: globalRelsInitValues } = require('./initialValues/globalRels')
const { presentationRels: presentationRelsInitValues } = require('./initialValues/presentationRels')
const { AppProps } = require('./parts/appProps')
const { ContentTypes } = require('./parts/contentTypes')
const { CoreProps } = require('./parts/coreProps')
const { Rels } = require('./parts/rels')
const { ViewProps } = require('./parts/viewProps')
const { TableStyles } = require('./parts/tableStyles')
const { PresProps } = require('./parts/presProps')
const { Presentation } = require('./parts/presentation')
const { Theme } = require('./parts/theme')
const { SlideMaster } = require('./parts/slideMaster')
const { SlideLayout } = require('./parts/slideLayout')
const { Tag } = require('./parts/tag')
const { Slide } = require('./parts/slide')
const { Media } = require('./parts/media')

class PresentationGenerator {
  constructor() {
    this.tempDirPath = path.resolve(__dirname, `../output/generated-from-scratch`)
    this.dataDirPath = path.resolve(this.tempDirPath, 'data')
    this.zipFileName = 'generated_presentation.pptx'
    this.files = []
    this.structure = {}

    this.init()
  }

  init() {
    const contentTypes = new ContentTypes('/', '[Content_Types].xml')
    const rels = new Rels('/_rels', '.rels', globalRelsInitValues)
    rels.addRelationship(RELATINSHIP_TYPE.thumbnail, 'docProps/thumbnail.jpeg')

    const appProps = new AppProps('/docProps', 'app.xml')
    const coreProps = new CoreProps('/docProps', 'core.xml')
    const thumbnail = new Media('/docProps', 'thumbnail.jpeg')
    thumbnail.setPath(path.join(__dirname, './media/thumbnail.jpeg'))

    const viewProps = new ViewProps('/ppt', 'viewProps.xml')
    const tableStyles = new TableStyles('/ppt', 'tableStyles.xml')
    const presProps = new PresProps('/ppt', 'presProps.xml')

    const presentationRels = new Rels('/ppt/_rels', 'presentation.xml.rels', presentationRelsInitValues)
    const presentation = new Presentation('/ppt', 'presentation.xml')
    presentation.setRels(presentationRels)

    this.structure = {
      contentTypes,
      rels,
      docProps: { app: appProps, core: coreProps, thumbnail },
      ppt: {
        presentation,
        viewProps,
        tableStyles,
        presProps,
        slideMasters: [],
        slideLayouts: [],
        theme: [],
        tags: [],
        slides: [],
      },
    }

    const masterSlide = this.addMasterSlide()

    const slideLayout = this.addSlideLayout(masterSlide)

    this.addTheme(masterSlide)

    // optional ?
    this.addTag({ presentation: this.structure.ppt.presentation })

    this.addSlide(slideLayout)
  }

  /**
   * Adds slide master
   * Every presentation has at least one master slide
   */
  addMasterSlide() {
    const index = this.structure.ppt.slideMasters.length + 1
    const fileName = `slideMaster${index}.xml`

    const masterSlideRels = new Rels('/ppt/slideMasters/_rels', `${fileName}.rels`)
    const masterSlide = new SlideMaster('/ppt/slideMasters', fileName)
    masterSlide.setRels(masterSlideRels)
    this.structure.ppt.slideMasters.push(masterSlide)

    const rId = this.structure.ppt.presentation.rels.addRelationship(
      RELATINSHIP_TYPE.slideMaster,
      `slideMasters/${fileName}`,
    )
    this.structure.ppt.presentation.addMasterSlideId(rId, '2147483648')

    this.structure.contentTypes.addContentType(`/ppt/slideMasters/${fileName}`, CONTENT_TYPE.slideMaster)

    return masterSlide
  }

  /**
   * Adds slide layout
   * Every presentation has at least one layout
   * @param {SlideMaster} masterSlide - master slide (slideMaster1.xml)
   */
  addSlideLayout(masterSlide) {
    const index = this.structure.ppt.slideLayouts.length + 1
    const fileName = `slideLayout${index}.xml`

    const slideLayoutRels = new Rels('/ppt/slideLayouts/_rels', `${fileName}.rels`)
    slideLayoutRels.addRelationship(RELATINSHIP_TYPE.slideMaster, `../slideMasters/${masterSlide.fileName}`)

    const slideLayout = new SlideLayout('/ppt/slideLayouts', fileName)
    slideLayout.setRels(slideLayoutRels)
    this.structure.ppt.slideLayouts.push(slideLayout)

    this.structure.contentTypes.addContentType(`/ppt/slideLayouts/${fileName}`, CONTENT_TYPE.slideLayout)
    const slideLayoutRId = masterSlide.rels.addRelationship(RELATINSHIP_TYPE.slideLayout, `../slideLayouts/${fileName}`)
    masterSlide.addSlideLayoutId(slideLayoutRId, '2147483649')

    return slideLayout
  }

  /**
   * Adds theme
   * Every presentation has at least one theme
   * @param {SlideMaster} masterSlide - master slide (slideMaster1.xml)
   */
  addTheme(masterSlide) {
    const index = this.structure.ppt.theme.length + 1
    const fileName = `theme${index}.xml`

    const theme = new Theme('/ppt/theme', fileName)
    this.structure.ppt.theme.push(theme)

    this.structure.contentTypes.addContentType(`/ppt/theme/${fileName}`, CONTENT_TYPE.theme)
    this.structure.ppt.presentation.rels.addRelationship(RELATINSHIP_TYPE.theme, `theme/${fileName}`)
    masterSlide.rels.addRelationship(RELATINSHIP_TYPE.theme, `../theme/${fileName}`)

    return theme
  }

  /**
   * Adds tag (optional)
   * @param {{ masterSlide, slideLayout, presentation }} options - each prop is an entity with rels
   */
  addTag(options) {
    const { masterSlide, slideLayout, presentation } = options
    const index = this.structure.ppt.tags.length + 1
    const fileName = `tag${index}.xml`

    const tag = new Tag('/ppt/tags', fileName)
    tag.addTag('NEWVI', 'false')
    tag.addTag('TSCLIENT', 'True')
    this.structure.ppt.tags.push(tag)

    this.structure.contentTypes.addContentType(`/ppt/tags/${fileName}`, CONTENT_TYPE.tag)

    if (masterSlide) {
      masterSlide.rels.addRelationship(RELATINSHIP_TYPE.tag, `../tags/${fileName}`)
    }

    if (slideLayout) {
      slideLayout.rels.addRelationship(RELATINSHIP_TYPE.tag, `../tags/${fileName}`)
    }

    if (presentation) {
      const rId = presentation.rels.addRelationship(RELATINSHIP_TYPE.tag, `tags/${fileName}`)
      presentation.addTag(rId)
      presentation.addExternalData()
    }
  }

  /**
   * Adds slide
   * @param {SlideLayout} slideLayout - slide layout (slideLayout1.xml)
   */
  addSlide(slideLayout) {
    const index = this.structure.ppt.slides.length + 1
    const fileName = `slide${index}.xml`

    const slideRels = new Rels('/ppt/slides/_rels', `${fileName}.rels`)
    slideRels.addRelationship(RELATINSHIP_TYPE.slideLayout, `../slideLayouts/${slideLayout.fileName}`)

    const slide = new Slide('/ppt/slides', fileName)
    slide.setRels(slideRels)
    this.structure.ppt.slides.push(slide)

    const rId = this.structure.ppt.presentation.rels.addRelationship(RELATINSHIP_TYPE.slide, `slides/${fileName}`)
    this.structure.ppt.presentation.addSlideId(rId, '256')
    this.structure.contentTypes.addContentType(`/ppt/slides/${fileName}`, CONTENT_TYPE.slide)

    this.structure.docProps.app.addSlide('Slide 1')

    return slide
  }

  addChart() {
    console.log('Not implemented :(')
  }

  build() {
    const parts = [
      this.structure.rels,
      this.structure.contentTypes,
      this.structure.docProps.app,
      this.structure.docProps.core,
      this.structure.docProps.thumbnail,
      this.structure.ppt.presentation,
      this.structure.ppt.presentation.rels,
      this.structure.ppt.viewProps,
      this.structure.ppt.tableStyles,
      this.structure.ppt.presProps,
      ...this.structure.ppt.theme,
      ...this.structure.ppt.tags,
    ]

    this.structure.ppt.slideMasters.forEach((item) => {
      parts.push(item)
      parts.push(item.rels)
    })

    this.structure.ppt.slideLayouts.forEach((item) => {
      parts.push(item)
      parts.push(item.rels)
    })

    this.structure.ppt.slides.forEach((item) => {
      parts.push(item)
      parts.push(item.rels)
    })

    this.files = parts.map((part) => {
      const fileName = part.getFileName()
      const filePath = part.getFilePath()
      const { isMedia } = part
      const fullFilePath = path.resolve(this.dataDirPath, `./${filePath}`, fileName)

      const data = isMedia ? part.path : buildXml(part.values, true)

      return {
        fileName,
        filePath,
        fullFilePath,
        isMedia,
        data,
      }
    })
  }

  save() {
    createDir(this.dataDirPath)

    this.files.forEach((file) => {
      if (file.isMedia) {
        copyFile(file.data, file.fullFilePath)
      } else {
        createFile(file.fullFilePath, file.data)
      }
    })
  }

  async zip() {
    const dstZipPath = path.resolve(this.tempDirPath, this.zipFileName)

    await zipFiles(this.files, dstZipPath)

    removeDir(this.dataDirPath)
  }
}

module.exports = {
  PresentationGenerator,
}
