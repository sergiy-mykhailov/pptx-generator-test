const { XMLNS } = require('../constants/common')
const { BasePart } = require('./basePart')
const { appProps } = require('../initialValues/appProps')

class AppProps extends BasePart {
  constructor(filePath, fileName) {
    super(filePath, fileName)
    this.values = {
      Properties: {
        props: { xmlns: XMLNS.ep, 'xmlns:vt': XMLNS.vt },
        ...appProps,
      },
    }
  }

  /**
   * Increases slides counter
   */
  addSlide(slideName) {
    this.values.Properties.Slides += 1
    // this.values.Properties.TitlesOfParts['vt:vector'].children.push({ 'vt:lpstr': slideName })
  }
}

module.exports = {
  AppProps,
}
