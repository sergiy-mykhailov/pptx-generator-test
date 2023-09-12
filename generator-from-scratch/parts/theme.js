const { XMLNS } = require('../constants/common')
const { BasePart } = require('./basePart')
const { theme } = require('../initialValues/theme')

class Theme extends BasePart {
  constructor(filePath, fileName) {
    super(filePath, fileName)

    this.values = {
      'a:theme': {
        props: {
          'xmlns:a': XMLNS.a,
          name: 'Default Theme',
        },
        ...theme,
      },
    }
  }
}

module.exports = {
  Theme,
}
