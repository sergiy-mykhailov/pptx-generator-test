const { BasePart } = require('./basePart')

class Media extends BasePart {
  constructor(filePath, fileName) {
    super(filePath, fileName)

    this.isMedia = true
  }

  setPath(path) {
    this.path = path
  }
}

module.exports = {
  Media,
}
