const { RELATINSHIP_TYPE } = require('../constants/common')

const globalRels = [
  { Relationship: { props: { Id: 'rId1', Type: RELATINSHIP_TYPE.appProps, Target: 'docProps/app.xml' } } },
  { Relationship: { props: { Id: 'rId2', Type: RELATINSHIP_TYPE.coreProps, Target: 'docProps/core.xml' } } },
  { Relationship: { props: { Id: 'rId3', Type: RELATINSHIP_TYPE.presentation, Target: 'ppt/presentation.xml' } } },
]

module.exports = {
  globalRels,
}
