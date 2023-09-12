const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
const { XMLNS } = require('../constants/common')
const { BasePart } = require('./basePart')
const { coreProps } = require('../initialValues/coreProps')

dayjs.extend(utc)

const getCurrentDate = () =>
  dayjs()
    .utc(true)
    .format()

class CoreProps extends BasePart {
  constructor(filePath, fileName) {
    super(filePath, fileName)
    this.values = {
      'cp:coreProperties': {
        props: {
          'xmlns:cp': XMLNS.cp,
          'xmlns:dc': XMLNS.dc,
          'xmlns:dcterms': XMLNS.dcterms,
          'xmlns:dcmitype': XMLNS.dcmitype,
          'xmlns:xsi': XMLNS.xsi,
        },
        ...coreProps,
        'dcterms:created': { props: { 'xsi:type': 'dcterms:W3CDTF' }, children: getCurrentDate() },
        'dcterms:modified': { props: { 'xsi:type': 'dcterms:W3CDTF' }, children: getCurrentDate() },
      },
    }
  }
}

module.exports = {
  CoreProps,
}
