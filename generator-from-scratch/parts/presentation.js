const { XMLNS } = require('../constants/common')
const { BasePart } = require('./basePart')
const { presentation } = require('../initialValues/presentation')

class Presentation extends BasePart {
  constructor(filePath, fileName) {
    super(filePath, fileName)

    this.values = {
      'p:presentation': {
        props: {
          'xmlns:a': XMLNS.a,
          'xmlns:r': XMLNS.r,
          'xmlns:p': XMLNS.p,
          saveSubsetFonts: '1',
        },
        ...presentation,
      },
    }
  }

  /**
   * Adds a master slide.
   * A master slide is the base or template upon which slides are built.
   * It specifies such things as the theme to be used and the layouts that are available.
   * Every presentation has at least one master slide;
   * if you want slides to use different themes, then each theme will require a different master slide.
   * @param {string} rId - ID for relationship within the .rels part for the presentation (presentation.rels.xml)
   * @param {string} id
   * @example
   * addMasterSlideId('rId1', '2147483648')
   */
  addMasterSlideId(rId, id) {
    this.values['p:presentation']['p:sldMasterIdLst'].push({
      'p:sldMasterId': {
        props: { id, 'r:id': rId },
      },
    })
  }

  /**
   * Adds a slide.
   * Each <p:sldId> simply refers to a relationship within the .rels part for the presentation (presentation.rels.xml).
   * Note that the order in which slides are listed is important, as it determines the order in which slides are shown
   * @param {string} rId - relationship ID (presentation.rels.xml)
   * @param {string} id
   * @example
   * addSlideId('rId1', '256')
   */
  addSlideId(rId, id) {
    this.values['p:presentation']['p:sldIdLst'].push({
      'p:sldId': {
        props: { id, 'r:id': rId },
      },
    })
  }

  /**
   * Adds a tag to  the '<p:custDataLst>'.
   * @param {string} rId - relationship ID (presentation.rels.xml)
   * @example
   * addTag('rId1')
   */
  addTag(rId) {
    if (!this.values['p:presentation']['p:custDataLst']) {
      this.values['p:presentation']['p:custDataLst'] = []
    }

    this.values['p:presentation']['p:custDataLst'].push({
      'p:tags': {
        props: { 'r:id': rId },
      },
    })
  }

  /**
   * Adds an external data to the '<p:extLst>'.
   */
  addExternalData() {
    if (!this.values['p:presentation']['p:extLst']) {
      this.values['p:presentation']['p:extLst'] = []
    }

    this.values['p:presentation']['p:extLst'].push({
      'p:ext': {
        props: { uri: '{EFAFB233-063F-42B5-8137-9DF3F51BA10A}' },
        'p15:sldGuideLst': {
          props: { 'xmlns:p15': XMLNS.p15 },
          children: [
            {
              'p15:guide': {
                props: { id: '1', orient: 'horz', pos: '2160' },
                'p15:clr': {
                  'a:srgbClr': { props: { val: 'A4A3A4' } },
                },
              },
            },
            {
              'p15:guide': {
                props: { id: '2', pos: '2880' },
                'p15:clr': {
                  'a:srgbClr': { props: { val: 'A4A3A4' } },
                },
              },
            },
          ],
        },
      },
    })
  }
}

module.exports = {
  Presentation,
}
