const { XMLNS } = require('../constants/common')
const { BasePart } = require('./basePart')

class Tag extends BasePart {
  constructor(filePath, fileName) {
    super(filePath, fileName)

    this.values = {
      'p:tagLst': {
        props: {
          'xmlns:a': XMLNS.a,
          'xmlns:r': XMLNS.r,
          'xmlns:p': XMLNS.p,
        },
        children: [],
      },
    }
  }

  /**
   * adds tag to list
   * @param {string} name - tag name
   * @param {string} val - tag value
   */
  addTag(name, val) {
    this.values['p:tagLst'].children.push({
      'p:tag': { props: { name, val } },
    })
  }
}

module.exports = {
  Tag,
}
