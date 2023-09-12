const { XMLNS } = require('../constants/common')
const { BasePart } = require('./basePart')

class Rels extends BasePart {
  constructor(filePath, fileName, initialValues = []) {
    super(filePath, fileName)
    this.values = {
      Relationships: {
        props: { xmlns: XMLNS.rels },
        children: [...initialValues],
      },
    }
  }

  /**
   * Adds a relationship.
   * @example
   * addRelationship(RELATINSHIP_TYPE.slideMaster, 'slideMasters/slideMaster1.xml')
   * // Relationship looks like this:
   * //   <Relationship
   * //     Id="rId1"
   * //     Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster"
   * //     Target="slideMasters/slideMaster1.xml"
   * //   />
   * @param {string} type - relationship type (namespace)
   * @param {string} target - path to the file (example: slideMasters/slideMaster1.xml)
   */
  addRelationship(type, target) {
    const rId = `rId${this.values.Relationships.children.length + 1}`

    this.values.Relationships.children.push({ Relationship: { props: { Id: rId, Type: type, Target: target } } })
    return rId
  }
}

module.exports = {
  Rels,
}
