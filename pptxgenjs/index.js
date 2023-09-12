const { generateCharts } = require('./generate')
const { generateDemo } = require('./demo')

async function main() {
  await generateCharts()
  await generateDemo()
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