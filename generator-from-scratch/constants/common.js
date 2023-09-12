const XMLNS = {
  // content types
  contentTypes: 'http://schemas.openxmlformats.org/package/2006/content-types',
  // core props
  cp: 'http://schemas.openxmlformats.org/package/2006/metadata/core-properties',
  dc: 'http://purl.org/dc/elements/1.1/',
  dcterms: 'http://purl.org/dc/terms/',
  dcmitype: 'http://purl.org/dc/dcmitype/',
  xsi: 'http://www.w3.org/2001/XMLSchema-instance',
  // app props
  ep: 'http://schemas.openxmlformats.org/officeDocument/2006/extended-properties',
  vt: 'http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes',
  // rels
  rels: 'http://schemas.openxmlformats.org/package/2006/relationships',
  // view props
  a: 'http://schemas.openxmlformats.org/drawingml/2006/main',
  r: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
  p: 'http://schemas.openxmlformats.org/presentationml/2006/main',
  // presentation
  p14: 'http://schemas.microsoft.com/office/powerpoint/2010/main',
  p15: 'http://schemas.microsoft.com/office/powerpoint/2012/main',
}

const RELATINSHIP_TYPE = {
  appProps: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties',
  coreProps: 'http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties',
  presentation: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument',
  presProps: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/presProps',
  tableStyles: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/tableStyles',
  viewProps: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/viewProps',
  slideMaster: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster',
  slideLayout: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout',
  theme: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme',
  tag: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/tags',
  oleObject: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/oleObject',
  image: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/image',
  slide: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide',
  thumbnail: 'http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail',
}

const CONTENT_TYPE = {
  xml: 'application/xml',
  jpeg: 'image/jpeg',
  jpg: 'image/jpg',
  gif: 'image/gif',
  png: 'image/png',
  rels: 'application/vnd.openxmlformats-package.relationships+xml',
  coreProps: 'application/vnd.openxmlformats-package.core-properties+xml',
  appProps: 'application/vnd.openxmlformats-officedocument.extended-properties+xml',
  theme: 'application/vnd.openxmlformats-officedocument.theme+xml',
  presentation: 'application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml',
  presProps: 'application/vnd.openxmlformats-officedocument.presentationml.presProps+xml',
  tableStyles: 'application/vnd.openxmlformats-officedocument.presentationml.tableStyles+xml',
  viewProps: 'application/vnd.openxmlformats-officedocument.presentationml.viewProps+xml',
  slideMaster: 'application/vnd.openxmlformats-officedocument.presentationml.slideMaster+xml',
  slideLayout: 'application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml',
  tag: 'application/vnd.openxmlformats-officedocument.presentationml.tags+xml',
  slide: 'application/vnd.openxmlformats-officedocument.presentationml.slide+xml',
}

module.exports = {
  XMLNS,
  CONTENT_TYPE,
  RELATINSHIP_TYPE,
}
