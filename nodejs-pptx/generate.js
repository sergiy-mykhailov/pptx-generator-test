const path = require('path')
const PPTX = require('nodejs-pptx')

const updatePptxFile = async () => {
  const pptx = new PPTX.Composer()

  await pptx.load(path.resolve(__dirname, './output/nodejs-pptx-template.pptx'))
  await pptx.compose(async (pres) => {
    await pres.getSlide('slide1').addImage((image) => {
      image
        .file(`../images/toyotaSmall.png`)
        .x(500)
        .y(100)
        .cx(166)
        .cy(100)

      const slide = pres.addSlide('hello_slide')
    })
  })
  await pptx.save(`./output/nodejs-pptx-template_updated.pptx`)

  return pptx
}

const generateEmptyPptxFile = async () => {
  const pptx = new PPTX.Composer()

  await pptx.compose((pres) => {
    pres.addSlide((slide) => {})
  })

  await pptx.save(`./output/nodejs-pptx-empty.pptx`)
}

module.exports = {
  updatePptxFile,
  generateEmptyPptxFile,
}
