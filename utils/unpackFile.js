/* eslint-disable no-console */

// example:
// node ./unpackFile.js ./empty_slide.pptx

const fs = require('fs')
const path = require('path')
const JSZip = require('jszip')

const makeDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
}

async function main() {
  const filePath = process.argv[2]
  if (!filePath) {
    throw new Error('Specify the path to the file to unpack')
  }

  const fullFilePath = path.resolve(__dirname, filePath)
  console.log('Start unpacking the archive:', fullFilePath)
  const dstDirName = path.parse(fullFilePath).name

  const zipFile = fs.readFileSync(fullFilePath)
  const zip = await JSZip.loadAsync(zipFile)

  const files = []
  zip.forEach((relativePath, zipItem) => {
    files.push({ relativePath, zipItem })
  })

  for (const file of files) {
    const { relativePath, zipItem } = file
    console.log('Unpacking file:', relativePath)
    const dstFilePath = path.resolve(__dirname, `../output/unpacked/${dstDirName}`, `./${relativePath}`)

    if (zipItem.dir) {
      makeDir(dstFilePath)
    } else {
      const dstSubDirName = path.dirname(dstFilePath)
      makeDir(dstSubDirName)

      const buffer = await zipItem.async('nodebuffer')
      fs.writeFileSync(dstFilePath, buffer)
    }
  }

  return null
}

main()
  .then(() => {
    console.log('Done!')
    process.exit(0)
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
