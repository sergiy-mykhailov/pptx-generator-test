const { XMLNS } = require('../constants/common')
const { BasePart } = require('./basePart')
const { viewProps } = require('../initialValues/viewProps')

class ViewProps extends BasePart {
  constructor(filePath, fileName) {
    super(filePath, fileName)
    this.values = {
      'p:viewPr': {
        props: {
          'xmlns:a': XMLNS.a,
          'xmlns:r': XMLNS.r,
          'xmlns:p': XMLNS.p,
        },
        ...viewProps,
      },
    }
  }
}

module.exports = {
  ViewProps,
}
