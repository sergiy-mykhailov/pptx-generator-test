const { RELATINSHIP_TYPE } = require('../constants/common')

const presentationRels = [
  { Relationship: { props: { Id: 'rId1', Type: RELATINSHIP_TYPE.presProps, Target: 'presProps.xml' } } },
  { Relationship: { props: { Id: 'rId2', Type: RELATINSHIP_TYPE.tableStyles, Target: 'tableStyles.xml' } } },
  { Relationship: { props: { Id: 'rId3', Type: RELATINSHIP_TYPE.viewProps, Target: 'viewProps.xml' } } },
  // { Relationship: { props: { Id: 'rId4', Type: RELATINSHIP_TYPE.slideMaster, Target: 'slideMasters/slideMaster1.xml' } } },
  // { Relationship: { props: { Id: 'rId5', Type: RELATINSHIP_TYPE.theme, Target: 'theme/theme1.xml' } } },
]

module.exports = {
  presentationRels,
}
