const getLvlPPr = (marL) => {
  return {
    props: { marL, algn: 'l', defTabSz: '914400', rtl: '0', eaLnBrk: '1', latinLnBrk: '0', hangingPunct: '1' },
    'a:defRPr': {
      props: { sz: '1800', kern: '1200' },
      'a:solidFill': { 'a:schemeClr': { props: { val: 'tx1' } } },
      'a:latin': { props: { typeface: '+mn-lt' } },
      'a:ea': { props: { typeface: '+mn-ea' } },
      'a:cs': { props: { typeface: '+mn-cs' } },
    },
  }
}

const presentation = {
  'p:sldMasterIdLst': [],
  'p:sldIdLst': [],
  'p:sldSz': { props: { cx: '9144000', cy: '6858000', type: 'screen4x3' } },
  'p:notesSz': { props: { cx: '6858000', cy: '9144000' } },
  'p:defaultTextStyle': {
    'a:defPPr': { 'a:defRPr': { props: { lang: 'en-US' } } },
    'a:lvl1pPr': getLvlPPr('0'),
    'a:lvl2pPr': getLvlPPr('457200'),
    'a:lvl3pPr': getLvlPPr('914400'),
    'a:lvl4pPr': getLvlPPr('1371600'),
    'a:lvl5pPr': getLvlPPr('1828800'),
    'a:lvl6pPr': getLvlPPr('2286000'),
    'a:lvl7pPr': getLvlPPr('2743200'),
    'a:lvl8pPr': getLvlPPr('3200400'),
    'a:lvl9pPr': getLvlPPr('3657600'),
  },
}

module.exports = {
  presentation,
}
