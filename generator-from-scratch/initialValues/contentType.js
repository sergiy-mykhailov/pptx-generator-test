const { CONTENT_TYPE } = require('../constants/common')

const contentType = [
  { Default: { props: { Extension: 'xml', ContentType: CONTENT_TYPE.xml } } },
  { Default: { props: { Extension: 'rels', ContentType: CONTENT_TYPE.rels } } },
  { Default: { props: { Extension: 'jpeg', ContentType: CONTENT_TYPE.jpeg } } },
  // { Default: { props: { Extension: 'jpg', ContentType: CONTENT_TYPE.jpg } } },
  // { Default: { props: { Extension: 'gif', ContentType: CONTENT_TYPE.gif } } },
  // { Default: { props: { Extension: 'png', ContentType: CONTENT_TYPE.png } } },
  { Override: { props: { PartName: '/docProps/core.xml', ContentType: CONTENT_TYPE.coreProps } } },
  { Override: { props: { PartName: '/docProps/app.xml', ContentType: CONTENT_TYPE.appProps } } },
  { Override: { props: { PartName: '/ppt/presentation.xml', ContentType: CONTENT_TYPE.presentation } } },
  { Override: { props: { PartName: '/ppt/presProps.xml', ContentType: CONTENT_TYPE.presProps } } },
  { Override: { props: { PartName: '/ppt/tableStyles.xml', ContentType: CONTENT_TYPE.tableStyles } } },
  { Override: { props: { PartName: '/ppt/viewProps.xml', ContentType: CONTENT_TYPE.viewProps } } },
]

module.exports = {
  contentType,
}
