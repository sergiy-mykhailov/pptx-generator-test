const viewProps = {
  'p:normalViewPr': {
    props: { horzBarState: 'maximized' },
    'p:restoredLeft': { props: { sz: 14483 } },
    'p:restoredTop': { props: { sz: 96327 } },
  },
  'p:slideViewPr': {
    'p:cSldViewPr': {
      'p:cViewPr': {
        props: { varScale: 1 },
        'p:scale': {
          children: [{ 'a:sx': { props: { n: 128, d: 100 } } }, { 'a:sy': { props: { n: 128, d: 100 } } }],
        },
        'p:origin': { props: { x: 1776, y: 176 } },
      },
      'p:guideLst': {
        children: [{ 'p:guide': { props: { pos: 2160, orient: 'horz' } } }, { 'p:guide': { props: { pos: 2880 } } }],
      },
    },
  },
  'p:notesTextViewPr': {
    'p:cViewPr': {
      'p:scale': {
        children: [{ 'a:sx': { props: { n: 100, d: 100 } } }, { 'a:sy': { props: { n: 100, d: 100 } } }],
      },
      'p:origin': { props: { x: 0, y: 0 } },
    },
  },
  'p:gridSpacing': { props: { cx: 76200, cy: 76200 } },
}

module.exports = {
  viewProps,
}
