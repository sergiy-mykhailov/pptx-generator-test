/* eslint-disable no-console */
const { PresentationGenerator } = require('./presentationGenerator')

async function main() {
  const presentationGenerator = new PresentationGenerator()

  // presentationGenerator.addSlide()
  // presentationGenerator.addChart()

  presentationGenerator.build()
  presentationGenerator.save()
  await presentationGenerator.zip()

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
