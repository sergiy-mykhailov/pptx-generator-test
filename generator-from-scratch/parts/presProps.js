const { XMLNS } = require('../constants/common')
const { BasePart } = require('./basePart')
const { presProps } = require('../initialValues/presProps')

class PresProps extends BasePart {
  constructor(filePath, fileName) {
    super(filePath, fileName)
    this.values = {
      'p:presentationPr': {
        props: {
          'xmlns:a': XMLNS.a,
          'xmlns:r': XMLNS.r,
          'xmlns:p': XMLNS.p,
        },
        ...presProps,
      },
    }
  }
}

module.exports = {
  PresProps,
}
