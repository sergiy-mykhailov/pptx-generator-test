const { XMLNS } = require('../constants/common')
const { BasePart } = require('./basePart')
const { slideLayout } = require('../initialValues/slideLayout')

/**
 * A slide layout is essentially a template design which can be applied to one or more slides,
 * defining the default appearance and positioning of objects on the slide.
 * Docs: http://officeopenxml.com/prSlideLayout.php
 */
class SlideLayout extends BasePart {
  constructor(filePath, fileName) {
    super(filePath, fileName)

    this.values = {
      'p:sldLayout': {
        props: {
          'xmlns:a': XMLNS.a,
          'xmlns:r': XMLNS.r,
          'xmlns:p': XMLNS.p,
          // type: 'blank',
          // preserve: '1',
        },
        ...slideLayout,
      },
    }
  }
}

module.exports = {
  SlideLayout,
}
