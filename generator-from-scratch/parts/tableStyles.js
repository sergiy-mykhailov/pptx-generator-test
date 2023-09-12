const { XMLNS } = require('../constants/common')
const { BasePart } = require('./basePart')

const DEF = '{5C22544A-7EE6-4342-B048-85BDC9FD1C3A}'

class TableStyles extends BasePart {
  constructor(filePath, fileName, initialValues = {}) {
    super(filePath, fileName)
    this.values = {
      'a:tblStyleLst': {
        props: {
          'xmlns:a': XMLNS.a,
          def: DEF,
        },
        ...initialValues,
      },
    }
  }
}

module.exports = {
  TableStyles,
}
