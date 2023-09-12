const path = require('path')
const fs = require('fs')
const JSZip = require('jszip')

const createDir = (filePath) => {
  const dirPath = path.dirname(filePath)

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
}

const removeDir = (dirPath) => {
  // TODO
  console.log('removeDir() is not implemented :(')
}

const createFile = (filePath, data) => {
  createDir(filePath)

  fs.writeFileSync(filePath, data)
}

const copyFile = (src, dst) => {
  createDir(dst)

  fs.cpSync(src, dst)
}

const zipFiles = async (files, dstZipPath) => {
  const zip = new JSZip()
  files.forEach((file) => {
    // zip.file(path.join(file.filePath, file.fileName), file.data)

    zip.file(path.join(file.filePath, file.fileName), fs.readFileSync(file.fullFilePath))
  })

  const zippedFile = await zip.generateAsync({ type: 'nodebuffer' })

  createFile(dstZipPath, zippedFile)
}

module.exports = {
  createDir,
  removeDir,
  createFile,
  copyFile,
  zipFiles,
}
