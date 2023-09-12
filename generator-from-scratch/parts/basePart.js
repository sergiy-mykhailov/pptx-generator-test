class BasePart {
  constructor(filePath, fileName) {
    this.filePath = filePath
    this.fileName = fileName
    this.isMedia = false
  }

  getFileName() {
    return this.fileName
  }

  getFilePath() {
    return this.filePath
  }

  /**
   * Sets the corresponding Rels entity
   * @param {Rels} rels - rels entity (example: presentation.xml.rels)
   */
  setRels(rels) {
    this.rels = rels
  }
}

module.exports = {
  BasePart,
}
