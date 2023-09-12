const { generateEmptyPptxFile } = require('./generate')

async function main() {
  await generateEmptyPptxFile()
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