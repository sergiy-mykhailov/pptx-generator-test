const { XMLNS } = require('../constants/common')
const { BasePart } = require('./basePart')
const { slideMaster } = require('../initialValues/slideMaster')

/**
 * The master slide is the template upon which presentation slides are built.
 * It specifies the shapes and objects as placeholders for content on presentation slides,
 * as well as the formatting of the content within the placeholders.
 * Docs: http://officeopenxml.com/prSlideMaster.php
 */
class SlideMaster extends BasePart {
  constructor(filePath, fileName) {
    super(filePath, fileName)

    this.values = {
      'p:sldMaster': {
        props: {
          'xmlns:a': XMLNS.a,
          'xmlns:r': XMLNS.r,
          'xmlns:p': XMLNS.p,
        },
        ...slideMaster,
      },
    }
  }

  /**
   * Specifies the list of slide layouts used within the slide master.
   * @param {string} rId - relationship ID uniquely identifying slide layout (slideMaster1.xml.rels) and (slideLayout1.xml.rels)
   * @param {string} id - unique ID that identifies slide layout within the presentation.
   * @example
   * addSlideLayoutId('rId1', '2147483649')
   */
  addSlideLayoutId(rId, id) {
    this.values['p:sldMaster']['p:sldLayoutIdLst'].push({
      'p:sldLayoutId': { props: { id, 'r:id': rId } },
    })
  }
}

module.exports = {
  SlideMaster,
}
