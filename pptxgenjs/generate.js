const path = require('path')
const Pptxgen = require('pptxgenjs')

const mainChartPalette = ['084391', '145BB8', '20ACE9', '2674D9', '5F97DF', 'A8C7F0', '37DEE7', '002960']

const addPlaneTextChart = (slide) => {
  slide.background = { color: 'F1F1F1' }

  slide.addText('fontSize: 32', { x: '5%', y: '5%', fontSize: 32 })
  slide.addText('fontSize: 24', { x: '5%', y: '15%', fontSize: 24 })
  slide.addText('fontSize: 16', { x: '5%', y: '25%', fontSize: 16 })
  slide.addText('color: 005599', { x: '5%', y: '35%', color: '005599' })
  slide.addText('bold', { x: '30%', y: '5%', bold: true })
  slide.addText('italic', { x: '40%', y: '5%', italic: true })
  slide.addText('align: right', { x: '0%', y: '20%', w: '100%', align: 'right' })
  slide.addText('valign: bottom', { x: '0%', y: '0%', w: '100%', h: '100%', valign: 'bottom' })
  slide.addText('rotate: 0', { x: '5%', y: '50%', rotate: 0 })
  slide.addText('rotate: 90', { x: '15%', y: '50%', rotate: 90, w: 1.5 })
  slide.addText('rotate: 270', { x: '25%', y: '50%', rotate: 270, w: 1.5 })
}

const addImageChart = (slide) => {
  slide.addImage({ w: 6, h: 4, path: path.resolve(__dirname, '../images/toyotaSmall.png') })
  // slide.addImage({ w: 6, h: 4, data: 'base64...' })
}

const addWaterfallChart = (slide, pptx, chartTitle = 'Chart Title') => {
  const optsChart = {
    x: 0.5,
    y: 0.5,
    w: '90%',
    h: '90%',
    barDir: 'col',
    // barDir: 'bar',
    barGrouping: 'stacked',
    chartColors: ['transparent', ...mainChartPalette, ...mainChartPalette],
    invertedColors: ['C0504D'],
    shadow: { type: 'none' },

    showLegend: true,
    legendPos: 't',

    showTitle: true,
    title: chartTitle,
    titleFontFace: 'Helvetica Neue Thin',
    titleFontSize: 18,
    titleColor: mainChartPalette[0],
    titlePos: { x: 1.5, y: 0 },

    // dataBorder: { pt: 1, color: 'transparent' },
    // dataLabelFontSize: 10,
    // dataLabelPosition: 'outEnd',
    // dataLabelFormatCode: '#.0',
    // showValue: true,

    //// X-axis
    catAxisTitleFontSize: 10,
    catAxisMajorTickMark: 'none',
    catAxisMinorTickMark: 'none',

    //// Y-axis
    valGridLine: { style: 'none' },
  }

  const labels8Series = ['Product A', 'Product B', 'Product C', 'Product D', 'Product E', 'Product F', 'Product G']
  const dataChartBar8Series = [
    { name: 'Strategy 0', labels: labels8Series, values: [0, 85, 75, 55, 40, 15, 0] },
    { name: 'Strategy 1', labels: labels8Series, values: [100, 0, 0, 0, 0, 0, 0] },
    { name: 'Strategy 2', labels: labels8Series, values: [0, 15, 0, 0, 0, 0, 0] },
    { name: 'Strategy 3', labels: labels8Series, values: [0, 0, 10, 0, 0, 0, 0] },
    { name: 'Strategy 4', labels: labels8Series, values: [0, 0, 0, 20, 0, 0, 0] },
    { name: 'Strategy 5', labels: labels8Series, values: [0, 0, 0, 0, 15, 0, 0] },
    { name: 'Strategy 6', labels: labels8Series, values: [0, 0, 0, 0, 0, 25, 0] },
    { name: 'Strategy 7', labels: labels8Series, values: [0, 0, 0, 0, 0, 0, 15] },
  ]

  slide.addChart(pptx.ChartType.bar, dataChartBar8Series, optsChart)

  slide.addShape(pptx.ShapeType.line, {
    x: 5.08 / 2.54,
    y: 5.23 / 2.54,
    w: 1.03 / 2.54,
    h: 0,
    line: { color: '000000', width: 0.75 },
  })
}

const addBarChartToConvertToWaterfall = (slide, pptx, chartTitle = 'Chart Title') => {
  const optsChart = {
    x: 0.5,
    y: 0.5,
    w: '90%',
    h: '90%',
    barDir: 'col',
    // barGrouping: 'stacked',
    chartColors: mainChartPalette,
    invertedColors: ['C0504D'],
    showLegend: true,
    //
    showTitle: true,
    title: chartTitle,
    titleFontFace: 'Helvetica Neue Thin',
    titleFontSize: 18,
    titleColor: mainChartPalette[0],
    titlePos: { x: 1.5, y: 0 },

    //// X-axis
    catAxisTitleFontSize: 10,
    catAxisMajorTickMark: 'none',
    catAxisMinorTickMark: 'none',

    //// Y-axis
    valGridLine: { style: 'none' },
  }

  const labels8Series = ['Product A', 'Product B', 'Product C', 'Product D', 'Product E', 'Product F', 'Product G']
  const dataChartBar8Series = [
    { name: 'Strategy 1', labels: labels8Series, values: [100, -15, -10, -30, -15, -10, -20] },
  ]
  slide.addChart(pptx.ChartType.bar, dataChartBar8Series, optsChart)
}

const addWaterfallChartStacked = (slide, pptx, chartTitle = 'Chart Title') => {
  const optsChart = {
    x: 0.5,
    y: 0.5,
    w: '90%',
    h: '90%',
    barDir: 'col',
    // barDir: 'bar',
    barGrouping: 'stacked',
    chartColors: ['transparent', ...mainChartPalette, ...mainChartPalette],
    invertedColors: ['C0504D'],
    shadow: { type: 'none' },

    showLegend: true,
    legendPos: 't',

    showTitle: true,
    title: chartTitle,
    titleFontFace: 'Helvetica Neue Thin',
    titleFontSize: 18,
    titleColor: mainChartPalette[0],
    titlePos: { x: 1.5, y: 0 },

    //// X-axis
    catAxisTitleFontSize: 10,
    catAxisMajorTickMark: 'none',
    catAxisMinorTickMark: 'none',

    //// Y-axis
    valGridLine: { style: 'none' },
  }

  const labels8Series = ['Product A', 'Product B', 'Product C', 'Product D', 'Product E', 'Product F', 'Product G']
  const dataChartBar8Series = [
    { name: 'Strategy 0', labels: labels8Series, values: [0, 470, 385, 315, 230, 125, 0] }, // max: 550
    { name: 'Strategy 1', labels: labels8Series, values: [100, 15, 10, 20, 15, 25, 15] },
    { name: 'Strategy 2', labels: labels8Series, values: [50, 5, 10, 0, 15, 0, 0] },
    { name: 'Strategy 3', labels: labels8Series, values: [50, 5, 10, 10, 5, 10, 30] },
    { name: 'Strategy 4', labels: labels8Series, values: [100, 0, 20, 20, 0, 20, 40] },
    { name: 'Strategy 5', labels: labels8Series, values: [50, 15, 0, 0, 15, 5, 15] },
    { name: 'Strategy 6', labels: labels8Series, values: [100, 10, 15, 10, 25, 25, 15] },
    { name: 'Strategy 7', labels: labels8Series, values: [100, 30, 20, 10, 10, 20, 10] },
  ]

  slide.addChart(pptx.ChartType.bar, dataChartBar8Series, optsChart)
}

const addBarChartToConvertToWaterfallStacked = (slide, pptx, chartTitle = 'Chart Title') => {
  const optsChart = {
    x: 0.5,
    y: 0.5,
    w: '90%',
    h: '90%',
    barDir: 'col',
    barGrouping: 'stacked',
    chartColors: mainChartPalette,
    invertedColors: ['C0504D'],
    showLegend: true,
    //
    showTitle: true,
    title: chartTitle,
    titleFontFace: 'Helvetica Neue Thin',
    titleFontSize: 18,
    titleColor: mainChartPalette[0],
    titlePos: { x: 1.5, y: 0 },

    //// X-axis
    catAxisTitleFontSize: 10,
    catAxisMajorTickMark: 'none',
    catAxisMinorTickMark: 'none',

    //// Y-axis
    valGridLine: { style: 'none' },
  }

  const labels8Series = ['Product A', 'Product B', 'Product C', 'Product D', 'Product E', 'Product F', 'Product G']
  const dataChartBar8Series = [
    { name: 'Strategy 1', labels: labels8Series, values: [100, -15, -10, -30, -15, -10, -20] },
    { name: 'Strategy 2', labels: labels8Series, values: [50, -5, -10, -5, -5, -10, -15] },
    { name: 'Strategy 3', labels: labels8Series, values: [75, -5, -10, -20, -15, -10, -10] },
  ]
  slide.addChart(pptx.ChartType.bar, dataChartBar8Series, optsChart)
}

const addBarChart = (slide, pptx, chartTitle = 'Chart Title') => {
  const labels = ['Product A', 'Product B', 'Product C', 'Product D', 'Product E', 'Product F', 'Product G']
  const dataBars = [{ name: 'Metric 1', labels, values: [100, 101, 140, 70, 54, 25, 100] }]
  const dataLines = [{ name: 'Bottom Q', labels, values: [30, 30, 30, 30, 30, 30, 30] }]

  const comboProps = {
    x: 0.5,
    y: 0.5,
    w: '90%',
    h: '90%',
    barDir: 'col',
    barGrouping: 'stacked',
    //
    catAxisLabelColor: '494949',
    catAxisLabelFontFace: 'Arial',
    catAxisLabelFontSize: 10,
    catAxisOrientation: 'minMax',
    //
    showLegend: true,
    legendPos: 't',
    //
    showTitle: true,
    titleFontFace: 'Calibri Light',
    titleFontSize: 14,
    title: chartTitle,
    //
    valAxes: [
      {
        showValAxisTitle: true,
        valAxisTitle: 'Metrics values',
        valAxisMaxVal: 160,
        valAxisTitleColor: '1982c4',
        valAxisLabelColor: '1982c4',
        valGridLine: { style: 'none' },
      },
      {
        showValAxisTitle: true,
        valAxisTitle: 'Aggregations values',
        valAxisMaxVal: 160,
        valAxisTitleColor: 'F38940',
        valAxisLabelColor: 'F38940',
        valGridLine: { style: 'none' },
      },
    ],
    //
    catAxes: [{ catAxisTitle: 'Year' }, { catAxisHidden: true }],
  }

  const comboTypes = [
    {
      type: pptx.charts.BAR,
      data: dataBars,
      options: {
        chartColors: [mainChartPalette[0]],
        barGrouping: 'stacked',
        dataLabelColor: 'FFFFFF',
        showValue: true,
      },
    },
    {
      type: pptx.charts.LINE,
      data: dataLines,
      options: { chartColors: ['556677'], secondaryValAxis: true, secondaryCatAxis: true, lineDataSymbol: 'none' },
    },
  ]

  slide.addChart(comboTypes, comboProps)
}

const addBarChartStacked = (slide, pptx, chartTitle = 'Chart Title') => {
  const comboProps = {
    x: 0.5,
    y: 0.5,
    w: '90%',
    h: '90%',
    barDir: 'col',
    barGrouping: 'stacked',
    //
    catAxisLabelFontFace: 'Arial',
    catAxisLabelFontSize: 10,
    catAxisOrientation: 'minMax',
    //
    showLegend: true,
    legendPos: 't',
    //
    showTitle: true,
    titleFontFace: 'Calibri Light',
    titleFontSize: 14,
    title: chartTitle,
    //
    valAxes: [
      {
        showValAxisTitle: true,
        valAxisTitle: 'Metrics values',
        valAxisMaxVal: 1200,
        valGridLine: { style: 'none' },
      },
      {
        showValAxisTitle: true,
        valAxisTitle: 'Aggregations values',
        valAxisMaxVal: 1200,
        valGridLine: { style: 'none' },
      },
    ],
    //
    catAxes: [{ catAxisTitle: 'Year' }, { catAxisHidden: true }],
  }

  const labels = ['Product A', 'Product B', 'Product C', 'Product D', 'Product E', 'Product F', 'Product G']
  const dataBars = [
    { name: 'Strategy 1', labels, values: [100, 101, 140, 70, 54, 25, 100] },
    { name: 'Strategy 2', labels, values: [105, 140, 144, 152, 35, 100, 44] },
    { name: 'Strategy 3', labels, values: [120, 80, 160, 144, 20, 180, 60] },
    { name: 'Strategy 4', labels, values: [90, 79, 162, 170, 99, 79, 16] },
    { name: 'Strategy 5', labels, values: [118, 99, 137, 20, 181, 159, 13] },
    { name: 'Strategy 6', labels, values: [18, 199, 117, 120, 131, 109, 43] },
    { name: 'Strategy 7', labels, values: [92, 75, 127, 120, 21, 169, 33] },
    { name: 'Strategy 8', labels, values: [118, 99, 137, 20, 181, 159, 13] },
  ]
  const dataLines = [{ name: 'Bottom Q', labels, values: [300, 300, 300, 300, 300, 300, 300] }]

  const comboTypes = [
    {
      type: pptx.charts.BAR,
      data: dataBars,
      options: { chartColors: mainChartPalette, barGrouping: 'stacked', dataLabelColor: 'FFFFFF', showValue: true },
    },
    {
      type: pptx.charts.LINE,
      data: dataLines,
      options: { chartColors: ['556677'], secondaryValAxis: true, secondaryCatAxis: true, lineDataSymbol: 'none' },
    },
  ]

  slide.addChart(comboTypes, comboProps)
}

const addRadarChart = (slide, pptx, chartTitle = 'Chart Title') => {
  const arrDataStudents = [
    {
      name: 'Student 1',
      labels: ['Logic', 'Coding', 'Results', 'Comments', 'Runtime'],
      values: [3, 1, 3, 3, 4],
    },
  ]
  const arrDataStudents2 = [
    {
      name: 'Student 2',
      labels: ['Logic', 'Coding', 'Results', 'Comments', 'Runtime'],
      values: [1, 2, 2, 3, 2],
    },
  ]

  // filled radar chart
  const optsChartRadar11 = {
    x: 0.2,
    y: 0.2,
    w: 3.0,
    h: 3.0,
    // chartArea: { fill: { color: 'F1F1F1' } },
    //
    radarStyle: 'filled',
    //
    chartColors: ['999999'], // marker & line color
    chartColorsOpacity: 25,
    catAxisLabelColor: '404040',
    catAxisLabelFontFace: 'Segoe UI',
    catAxisLabelFontSize: 10,
    catAxisLineShow: false,
    //
    lineDataSymbolSize: 2, // marker size (2-72)
    lineSize: 1, // line size
    valAxisLabelFontFace: 'Segoe UI',
    valAxisLabelFontSize: 10,
    //
    showLegend: true,
    legendPos: 't',
    legendColor: '404040',
    //
    titleColor: '404040',
    titleFontFace: 'Helvetica Neue',
    titleFontSize: 12,
    showTitle: true,
    title: 'filled radar chart',
  }
  slide.addChart(pptx.charts.RADAR, arrDataStudents, optsChartRadar11)

  // standard radar chart
  const optsChartRadar12 = {
    x: 3.5,
    y: 0.2,
    w: 3.0,
    h: 3.0,
    //
    radarStyle: 'standard',
    lineDataSymbol: 'none',
    //
    chartColors: mainChartPalette, // marker & line color
    chartColorsOpacity: 25,
    catAxisLabelColor: '404040',
    catAxisLabelFontFace: 'Segoe UI',
    catAxisLabelFontSize: 10,
    catAxisLineShow: false,
    //
    lineDataSymbolSize: 2, // marker size (2-72)
    lineSize: 1, // line size
    valAxisLabelFontFace: 'Segoe UI',
    valAxisLabelFontSize: 10,
    //
    showLegend: true,
    legendPos: 't',
    legendColor: '404040',
    //
    titleColor: '404040',
    titleFontFace: 'Helvetica Neue',
    titleFontSize: 12,
    showTitle: true,
    title: 'standard radar chart',
  }
  slide.addChart(pptx.charts.RADAR, arrDataStudents, optsChartRadar12)

  // standard over filled
  const optsChartRadar13 = {
    x: 6.7,
    y: 0.2,
    w: 3.0,
    h: 3.0,
    //
    radarStyle: 'filled',
    //
    chartColors: ['888888'], // marker & line color
    chartColorsOpacity: 25,
    catAxisLabelColor: '404040',
    catAxisLabelFontFace: 'Segoe UI',
    catAxisLabelFontSize: 10,
    catAxisLineShow: false,
    //
    lineDataSymbolSize: 2, // marker size (2-72)
    lineSize: 1, // line size
    valAxisLabelFontFace: 'Segoe UI',
    valAxisLabelFontSize: 10,
    //
    showLegend: true,
    legendPos: 't',
    legendColor: '404040',
    //
    titleColor: '404040',
    titleFontFace: 'Helvetica Neue',
    titleFontSize: 12,
    showTitle: true,
    title: 'standard over filled',
  }
  slide.addChart(pptx.charts.RADAR, arrDataStudents, optsChartRadar13)

  const optsChartRadar14 = {
    x: 6.7,
    y: 0.2,
    w: 3.0,
    h: 3.0,
    //
    radarStyle: 'standard',
    lineDataSymbol: 'none',
    //
    chartColors: mainChartPalette, // marker & line color
    chartColorsOpacity: 25,
    catAxisLabelFontSize: 10,
    catAxisLabelColor: 'transparent',
    //
    lineDataSymbolSize: 2, // marker size (2-72)
    lineSize: 1, // line size
    valAxisLabelFontSize: 10,
    //
    showLegend: true,
    legendPos: 't',
    legendColor: '404040',
    //
    titleColor: 'transparent',
    titleFontSize: 12,
    showTitle: true,
    title: ' ',
  }
  slide.addChart(pptx.charts.RADAR, arrDataStudents2, optsChartRadar14)
}

const addRadarChartCombo = (slide, pptx, chartTitle = 'Chart Title') => {
  const labels = ['Logic', 'Coding', 'Results', 'Comments', 'Runtime']
  const dataValues = [{ name: 'Metric', labels, values: [3, 2, 3, 3, 4] }]
  const aggValues = [{ name: 'Median', labels, values: [1, 2, 2, 3, 2] }]

  const comboProps = {
    x: 0.5,
    y: 0.5,
    w: 5,
    h: 5,
    //
    catAxisLabelFontFace: 'Arial',
    catAxisLabelFontSize: 10,
    //
    showLegend: true,
    legendPos: 't',
    //
    showTitle: true,
    titleFontFace: 'Calibri Light',
    titleFontSize: 14,
    title: chartTitle,
    //
    valAxes: [
      {
        showValAxisTitle: true,
        valAxisMaxVal: 5,
      },
      {
        showValAxisTitle: true,
        valAxisMaxVal: 5,
      },
    ],
    //
    catAxes: [{ catAxisTitle: 'Year' }, { catAxisHidden: true }],
  }

  const comboTypes = [
    {
      type: pptx.charts.RADAR,
      data: dataValues,
      options: {
        radarStyle: 'standard',
        lineDataSymbol: 'none',
        chartColors: mainChartPalette,
        lineSize: 1,
      },
    },
    {
      type: pptx.charts.RADAR,
      data: aggValues,
      options: {
        radarStyle: 'filled',
        lineDataSymbol: 'none',
        chartColors: ['999999'],
        chartColorsOpacity: 25,
        lineSize: 1, // line size
        secondaryValAxis: true,
        secondaryCatAxis: true,
      },
    },
  ]

  slide.addChart(comboTypes, comboProps)
}

const addTableChart = (slide, pptx) => {
  const arrRows = [
    [
      { text: 'KPI', options: { bold: true, align: 'center', valign: 'middle' } },
      { text: 'Units of measure', options: { bold: true, align: 'center', valign: 'middle' } },
      { text: 'Top quartile', options: { bold: true, align: 'center', valign: 'middle' } },
      { text: 'Median', options: { bold: true, align: 'center', valign: 'middle' } },
      { text: 'fab 1', options: { bold: true, align: 'center', valign: 'middle' } },
    ],
    [
      { text: 'numbers', options: { valign: 'middle' } },
      { text: '#', options: { valign: 'middle' } },
      { text: 880, options: { fill: '888888', align: 'center', valign: 'middle' } },
      { text: 730, options: { fill: 'aaaaaa', align: 'center', valign: 'middle' } },
      { text: 1000, options: { align: 'center', valign: 'middle' } },
    ],
    [
      { text: 'traffic lights', options: { valign: 'middle' } },
      { text: '#', options: { valign: 'middle' } },
      { text: 900, options: { fill: '888888', align: 'center', valign: 'middle' } },
      { text: 750, options: { fill: 'aaaaaa', align: 'center', valign: 'middle' } },
      { text: 1050, options: { fill: '8aca49', align: 'center', valign: 'middle' } },
    ],
    [
      { text: 'bar chart', options: { valign: 'middle' } },
      { text: '#', options: { valign: 'middle' } },
      { text: 700, options: { fill: '888888', align: 'center', valign: 'middle' } },
      { text: 650, options: { fill: 'aaaaaa', align: 'center', valign: 'middle' } },
      { text: 850, options: { align: 'center', valign: 'middle' } },
    ],
    [
      { text: 'percent range', options: { valign: 'middle' } },
      { text: '#', options: { valign: 'middle' } },
      { text: 600, options: { fill: '888888', align: 'center', valign: 'middle' } },
      { text: 550, options: { fill: 'aaaaaa', align: 'center', valign: 'middle' } },
      { text: 750, options: { align: 'center', valign: 'middle' } },
    ],
    [
      { text: 'pie chart', options: { valign: 'middle' } },
      { text: '#', options: { valign: 'middle' } },
      { text: 500, options: { fill: '888888', align: 'center', valign: 'middle' } },
      { text: 450, options: { fill: 'aaaaaa', align: 'center', valign: 'middle' } },
      { text: 650, options: { align: 'center', valign: 'middle' } },
    ],
  ]

  slide.addTable(arrRows, {
    x: 0.5,
    y: 0.5,
    colW: [1, 1, 1.5, 1.5, 2],
    margin: 0.1,
    border: { color: 'CFCFCF' },
    autoPage: true,
  })
}

const addHeatmapChart = (slide, pptx) => {
  const arrRows = [
    [
      { text: '', options: { bold: true, align: 'center', valign: 'middle' } },
      { text: 'item 1', options: { bold: true, align: 'center', valign: 'middle' } },
      { text: 'item 2', options: { bold: true, align: 'center', valign: 'middle' } },
      { text: 'item 3', options: { bold: true, align: 'center', valign: 'middle' } },
      { text: 'item 4', options: { bold: true, align: 'center', valign: 'middle' } },
    ],
    [
      { text: 'metric 1', options: { valign: 'middle' } },
      { text: '', options: { fill: 'cccccc', valign: 'middle' } },
      { text: '', options: { fill: 'cccccc', align: 'center', valign: 'middle' } },
      { text: '', options: { fill: mainChartPalette[5], align: 'center', valign: 'middle' } },
      { text: '', options: { fill: mainChartPalette[6], align: 'center', valign: 'middle' } },
    ],
    [
      { text: 'metric 2', options: { valign: 'middle' } },
      { text: '', options: { fill: mainChartPalette[6], valign: 'middle' } },
      { text: '', options: { fill: 'cccccc', align: 'center', valign: 'middle' } },
      { text: '', options: { fill: 'cccccc', align: 'center', valign: 'middle' } },
      { text: '', options: { fill: mainChartPalette[5], align: 'center', valign: 'middle' } },
    ],
    [
      { text: 'metric 3', options: { valign: 'middle' } },
      { text: '', options: { fill: 'cccccc', valign: 'middle' } },
      { text: '', options: { fill: mainChartPalette[5], align: 'center', valign: 'middle' } },
      { text: '', options: { fill: 'cccccc', align: 'center', valign: 'middle' } },
      { text: '', options: { fill: 'cccccc', align: 'center', valign: 'middle' } },
    ],
  ]

  slide.addTable(arrRows, {
    x: 0.5,
    y: 0.5,
    margin: 0.1,
    border: { color: 'ffffff' },
  })
}

const addScatterChart = (slide, pptx) => {
  const arrDataScatter1 = [
    { name: 'X-Axis', values: [0, 10, 20, 30, 40, 50] },
    { name: 'Y-Value 1', values: [90, 80, 70, 85, 75, 92], labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
    { name: 'Y-Value 2', values: [21, 32, 40, 49, 31, 29], labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
  ]

  const optsChartScat1 = {
    x: 0.5,
    y: 0.5,
    w: '45%',
    h: 3,
    valGridLine: { style: 'none' },
    catGridLine: { style: 'none' },
    lineSize: 0,
  }
  slide.addChart(pptx.charts.SCATTER, arrDataScatter1, optsChartScat1)
}

const addPieChart = (slide, pptx) => {
  const dataChartPieStat = [
    {
      name: 'Project Status',
      labels: ['Red', 'Yellow', 'Green', 'Complete', 'Cancelled', 'Unknown'],
      values: [25, 5, 5, 5, 5, 5],
    },
  ]

  slide.addChart(pptx.charts.PIE, dataChartPieStat, {
    x: 0.5,
    y: 0.6,
    w: 4.0,
    h: 3.2,
    chartColors: mainChartPalette,
    dataBorder: { pt: 2, color: 'transparent' },
    //
    legendPos: 't',
    showLegend: true,
    //
    showLeaderLines: true,
    showPercent: false,
    showValue: true,
    dataLabelColor: 'FFFFFF',
    dataLabelFontSize: 14,
    dataLabelPosition: 'bestFit', // 'bestFit' | 'outEnd' | 'inEnd' | 'ctr'
  })
}

const addBubbleChart = (slide, pptx) => {
  const arrDataBubble1 = [
    { name: 'X-Axis', values: [0.3, 0.6, 0.9, 1.2, 1.5, 1.7] },
    { name: 'Y-Value 1', values: [1.3, 9, 7.5], sizes: [1, 4, 2] },
    { name: 'Y-Value 2', values: [5.0, 3, 2.0], sizes: [9, 7, 5] },
  ]

  const optsChartBubble1 = {
    x: 0.5,
    y: 0.5,
    w: '45%',
    h: 3,
    chartColors: mainChartPalette,
    dataBorder: { pt: 1, color: 'FFFFFF' },
    valAxisCrossesAt: 4,
    catAxisCrossesAt: 1.2,
    dataLabelFontFace: 'Arial',
    dataLabelFontSize: 10,
    dataLabelColor: '363636',
    dataLabelPosition: 'r',
    showSerName: true,
    showLeaderLines: true,
    valGridLine: { style: 'none' },
    catGridLine: { style: 'none' },
  }
  slide.addChart(pptx.charts.BUBBLE, arrDataBubble1, optsChartBubble1)
}

//-------------------------------------------------------------------------------

const generateCharts = async () => {
  const pptx = new Pptxgen()

  {
    const sectionTitle = 'Text and image'
    pptx.addSection({ title: sectionTitle })

    const slide1 = pptx.addSlide({ masterName: 'Plane text', sectionTitle })
    addPlaneTextChart(slide1)

    const slide3 = pptx.addSlide({ masterName: 'Image', sectionTitle })
    addImageChart(slide3)
  }

  {
    const sectionTitle = 'Waterfall'
    pptx.addSection({ title: sectionTitle })

    const slide1 = pptx.addSlide({ masterName: 'Waterfall chart', sectionTitle })
    addWaterfallChart(slide1, pptx, 'Waterfall chart')

    const slide2 = pptx.addSlide({ masterName: 'Waterfall chart from bar chart', sectionTitle })
    addBarChartToConvertToWaterfall(slide2, pptx, 'Waterfall chart from bar chart')

    const slide3 = pptx.addSlide({ masterName: 'Waterfall chart stacked', sectionTitle })
    addWaterfallChartStacked(slide3, pptx, 'Stacked waterfall chart')

    const slide4 = pptx.addSlide({ masterName: 'Stacked waterfall from stacked bar chart', sectionTitle })
    addBarChartToConvertToWaterfallStacked(slide4, pptx, 'Stacked waterfall from stacked bar chart')
  }

  {
    const sectionTitle = 'Bar chart'
    pptx.addSection({ title: sectionTitle })

    const slide6 = pptx.addSlide({ masterName: 'Bar chart', sectionTitle })
    addBarChart(slide6, pptx, 'Bar chart')

    const slide7 = pptx.addSlide({ masterName: 'Bar chart stacked', sectionTitle })
    addBarChartStacked(slide7, pptx, 'Bar chart stacked')
  }

  {
    const sectionTitle = 'Radar chart'
    pptx.addSection({ title: sectionTitle })

    const slide = pptx.addSlide({ masterName: 'Radar chart', sectionTitle })
    addRadarChart(slide, pptx, 'Radar chart')

    const slide2 = pptx.addSlide({ masterName: 'Radar chart', sectionTitle })
    addRadarChartCombo(slide2, pptx, 'Radar chart Combo')
  }

  {
    const sectionTitle = 'Table'
    pptx.addSection({ title: sectionTitle })

    const slide = pptx.addSlide({ masterName: 'Table chart', sectionTitle })
    addTableChart(slide, pptx)
  }

  {
    const sectionTitle = 'Heatmap'
    pptx.addSection({ title: sectionTitle })

    const slide = pptx.addSlide({ masterName: 'Heatmap chart', sectionTitle })
    addHeatmapChart(slide, pptx)
  }

  {
    const sectionTitle = 'Scatter'
    pptx.addSection({ title: sectionTitle })

    const slide = pptx.addSlide({ masterName: 'Scatter chart', sectionTitle })
    addScatterChart(slide, pptx)
  }

  {
    const sectionTitle = 'Pie'
    pptx.addSection({ title: sectionTitle })

    const slide = pptx.addSlide({ masterName: 'Pie chart', sectionTitle })
    addPieChart(slide, pptx)
  }

  {
    const sectionTitle = 'Bubble'
    pptx.addSection({ title: sectionTitle })

    const slide = pptx.addSlide({ masterName: 'Bubble chart', sectionTitle })
    addBubbleChart(slide, pptx)
  }

  await pptx.writeFile({ fileName: './output/pptxgenjs-example.pptx' })
}

module.exports = {
  generateCharts,
}
