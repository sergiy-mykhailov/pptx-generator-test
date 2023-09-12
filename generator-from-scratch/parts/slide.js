const { XMLNS } = require('../constants/common')
const { BasePart } = require('./basePart')
const { slide } = require('../initialValues/slide')

class Slide extends BasePart {
  constructor(filePath, fileName) {
    super(filePath, fileName)

    this.values = {
      'p:sld': {
        props: {
          'xmlns:a': XMLNS.a,
          'xmlns:r': XMLNS.r,
          'xmlns:p': XMLNS.p,
        },
        ...slide,
      },
    }
  }
}

module.exports = {
  Slide,
}
