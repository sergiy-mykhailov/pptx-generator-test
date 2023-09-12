const Pptxgen = require('pptxgenjs')
const { genSlidesChart } = require('./pptxgenjs-demo/demo_chart')
const { genSlidesShape } = require('./pptxgenjs-demo/demo_shape')
const { genSlidesTable } = require('./pptxgenjs-demo/demo_table')

const generateDemo = async () => {
  const pptx = new Pptxgen()

  pptx.addSection({ title: 'Section1' })

  genSlidesChart(pptx)
  genSlidesShape(pptx)
  genSlidesTable(pptx)

  await pptx.writeFile({ fileName: './output/pptxgenjs-example-demo.pptx' })
}

module.exports = {
  generateDemo,
}
