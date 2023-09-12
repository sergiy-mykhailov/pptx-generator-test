const slideLayout = {
  'p:cSld': {
    props: { name: 'Blank' },
    'p:spTree': {
      'p:nvGrpSpPr': {
        'p:cNvPr': { props: { id: '1', name: '' } },
        'p:cNvGrpSpPr': {},
        'p:nvPr': {},
      },
      'p:grpSpPr': {
        'a:xfrm': {
          'a:off': { props: { x: '0', y: '0' } },
          'a:ext': { props: { cx: '0', cy: '0' } },
          'a:chOff': { props: { x: '0', y: '0' } },
          'a:chExt': { props: { cx: '0', cy: '0' } },
        },
      },
      'p:sp': {
        'p:nvSpPr': {
          'p:cNvPr': { props: { id: '4', name: 'Slide Number Placeholder 1' } },
          'p:cNvSpPr': { 'a:spLocks': { props: { noGrp: '1' } } },
          'p:nvPr': {
            'p:ph': { props: { type: 'sldNum', sz: 'quarter', idx: '12' } },
          },
        },
        'p:spPr': {
          'a:xfrm': {
            'a:off': { props: { x: '6553200', y: '6356350' } },
            'a:ext': { props: { cx: '2133600', cy: '365125' } },
          },
          'a:prstGeom': { props: { prst: 'rect' }, children: [{ 'a:avLst': {} }] },
        },
        'p:txBody': {
          'a:bodyPr': {
            props: {
              vert: 'horz',
              lIns: '91440',
              tIns: '45720',
              rIns: '91440',
              bIns: '45720',
              rtlCol: '0',
              anchor: 'ctr',
            },
          },
          'a:lstStyle': {
            'a:lvl1pPr': {
              props: { algn: 'r' },
              'a:defRPr': {
                props: { sz: '1200' },
                'a:solidFill': {
                  'a:schemeClr': {
                    props: { val: 'tx1' },
                    'a:tint': { props: { val: '75000' } },
                  },
                },
              },
            },
          },
          'a:p': {
            'a:fld': {
              props: {
                id: '{EEA4CB10-01EC-4F0B-B0D3-B7B5571F5409}',
                type: 'slidenum',
              },
              'a:rPr': { props: { lang: 'en-US', smtClean: '0' } },
              'a:t': '‹#›',
            },
            'a:endParaRPr': { props: { lang: 'en-US' } },
          },
        },
      },
    },
  },
  'p:clrMapOvr': { 'a:masterClrMapping': {} },
}

module.exports = {
  slideLayout,
}
