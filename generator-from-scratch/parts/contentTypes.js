const { XMLNS } = require('../constants/common')
const { BasePart } = require('./basePart')
const { contentType } = require('../initialValues/contentType')

class ContentTypes extends BasePart {
  constructor(filePath, fileName) {
    super(filePath, fileName)
    this.values = {
      Types: {
        props: { xmlns: XMLNS.contentTypes },
        children: [...contentType],
      },
    }
  }

  addDefaultContentType(extension, contentType) {
    this.values.Types.children.push({ Default: { props: { Extension: extension, ContentType: contentType } } })
    return this
  }

  addContentType(partName, contentType) {
    this.values.Types.children.push({ Override: { props: { PartName: partName, ContentType: contentType } } })
    return this
  }
}

module.exports = {
  ContentTypes,
}
