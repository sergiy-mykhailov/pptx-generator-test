// http://officeopenxml.com/prSlide-color.php
const getColorMap = () => ({
  props: {
    bg1: 'lt1',
    tx1: 'dk1',
    bg2: 'lt2',
    tx2: 'dk2',
    accent1: 'accent1',
    accent2: 'accent2',
    accent3: 'accent3',
    accent4: 'accent4',
    accent5: 'accent5',
    accent6: 'accent6',
    hlink: 'hlink',
    folHlink: 'folHlink',
  },
})

// http://officeopenxml.com/prCommonSlideData.php
const getSlideContent = () => ({
  'p:bg': {
    'p:bgRef': { propsidx: '1001', 'a:schemeClr': { propsval: 'bg1' } },
  },
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
    'p:sp': [
      {
        'p:nvSpPr': {
          'p:cNvPr': { props: { id: '2', name: 'Title Placeholder 1' } },
          'p:cNvSpPr': { 'a:spLocks': { propsnoGrp: '1' } },
          'p:nvPr': { 'p:ph': { propstype: 'title' } },
        },
        'p:spPr': {
          'a:xfrm': {
            'a:off': { props: { x: '457200', y: '274638' } },
            'a:ext': { props: { cx: '8229600', cy: '1143000' } },
          },
          'a:prstGeom': { propsprst: 'rect', 'a:avLst': {} },
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
            'a:normAutofit': {},
          },
          'a:lstStyle': {},
          'a:p': {
            'a:r': {
              'a:rPr': { props: { lang: 'en-US' } },
              'a:t': 'Click to edit Master title style',
            },
          },
        },
      },
      {
        'p:nvSpPr': {
          'p:cNvPr': { props: { id: '3', name: 'Text Placeholder 2' } },
          'p:cNvSpPr': { 'a:spLocks': { propsnoGrp: '1' } },
          'p:nvPr': { 'p:ph': { props: { type: 'body', idx: '1' } } },
        },
        'p:spPr': {
          'a:xfrm': {
            'a:off': { props: { x: '457200', y: '1600200' } },
            'a:ext': { props: { cx: '8229600', cy: '4525963' } },
          },
          'a:prstGeom': { propsprst: 'rect', 'a:avLst': {} },
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
            },
            'a:normAutofit': {},
          },
          'a:lstStyle': {},
          'a:p': [
            {
              'a:pPr': { propslvl: '0' },
              'a:r': {
                'a:rPr': { props: { lang: 'en-US' } },
                'a:t': 'Click to edit Master text styles',
              },
            },
            {
              'a:pPr': { propslvl: '1' },
              'a:r': {
                'a:rPr': { props: { lang: 'en-US' } },
                'a:t': 'Second level',
              },
            },
            {
              'a:pPr': { propslvl: '2' },
              'a:r': {
                'a:rPr': { props: { lang: 'en-US' } },
                'a:t': 'Third level',
              },
            },
            {
              'a:pPr': { propslvl: '3' },
              'a:r': {
                'a:rPr': { props: { lang: 'en-US' } },
                'a:t': 'Fourth level',
              },
            },
            {
              'a:pPr': { propslvl: '4' },
              'a:r': {
                'a:rPr': { props: { lang: 'en-US' } },
                'a:t': 'Fifth level',
              },
              // 'a:endParaRPr': { propslang: 'en-US' },
            },
          ],
        },
      },
      {
        'p:nvSpPr': {
          'p:cNvPr': { props: { id: '4', name: 'Date Placeholder 3' } },
          'p:cNvSpPr': { 'a:spLocks': { propsnoGrp: '1' } },
          'p:nvPr': {
            'p:ph': { props: { type: 'dt', sz: 'half', idx: '2' } },
          },
        },
        'p:spPr': {
          'a:xfrm': {
            'a:off': { props: { x: '457200', y: '6356350' } },
            'a:ext': { props: { cx: '2133600', cy: '365125' } },
          },
          'a:prstGeom': { propsprst: 'rect', 'a:avLst': {} },
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
              propsalgn: 'l',
              'a:defRPr': {
                propssz: '1200',
                'a:solidFill': {
                  'a:schemeClr': {
                    propsval: 'tx1',
                    'a:tint': { propsval: '75000' },
                  },
                },
              },
            },
          },
          'a:p': {
            'a:fld': {
              props: {
                id: '{036EEA2E-C0C0-453E-845A-3EE4D9BD6F62}',
                type: 'datetimeFigureOut',
              },
              'a:rPr': { props: { lang: 'en-US', smtClean: '0' } },
              'a:t': '8/24/23',
            },
            'a:endParaRPr': { propslang: 'en-US' },
          },
        },
      },
      {
        'p:nvSpPr': {
          'p:cNvPr': { props: { id: '5', name: 'Footer Placeholder 4' } },
          'p:cNvSpPr': { 'a:spLocks': { propsnoGrp: '1' } },
          'p:nvPr': {
            'p:ph': { props: { type: 'ftr', sz: 'quarter', idx: '3' } },
          },
        },
        'p:spPr': {
          'a:xfrm': {
            'a:off': { props: { x: '3124200', y: '6356350' } },
            'a:ext': { props: { cx: '2895600', cy: '365125' } },
          },
          'a:prstGeom': { propsprst: 'rect', 'a:avLst': {} },
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
              propsalgn: 'ctr',
              'a:defRPr': {
                propssz: '1200',
                'a:solidFill': {
                  'a:schemeClr': {
                    propsval: 'tx1',
                    'a:tint': { propsval: '75000' },
                  },
                },
              },
            },
          },
          'a:p': { 'a:endParaRPr': { propslang: 'en-US' } },
        },
      },
      {
        'p:nvSpPr': {
          'p:cNvPr': {
            props: { id: '6', name: 'Slide Number Placeholder 5' },
          },
          'p:cNvSpPr': { 'a:spLocks': { propsnoGrp: '1' } },
          'p:nvPr': {
            'p:ph': { props: { type: 'sldNum', sz: 'quarter', idx: '4' } },
          },
        },
        'p:spPr': {
          'a:xfrm': {
            'a:off': { props: { x: '6553200', y: '6356350' } },
            'a:ext': { props: { cx: '2133600', cy: '365125' } },
          },
          'a:prstGeom': { propsprst: 'rect', 'a:avLst': {} },
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
              propsalgn: 'r',
              'a:defRPr': {
                propssz: '1200',
                'a:solidFill': {
                  'a:schemeClr': {
                    propsval: 'tx1',
                    'a:tint': { propsval: '75000' },
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
            'a:endParaRPr': { propslang: 'en-US' },
          },
        },
      },
    ],
  },
})

// http://officeopenxml.com/prSlide-styles-textStyles.php
const getTextStyles = () => ({
  'p:titleStyle': {
    'a:lvl1pPr': {
      props: {
        algn: 'ctr',
        defTabSz: '914400',
        rtl: '0',
        eaLnBrk: '1',
        latinLnBrk: '0',
        hangingPunct: '1',
      },
      'a:spcBef': { 'a:spcPct': { propsval: '0' } },
      'a:buNone': {},
      'a:defRPr': {
        props: { sz: '4400', kern: '1200' },
        'a:solidFill': { 'a:schemeClr': { propsval: 'tx1' } },
        'a:latin': { propstypeface: '+mj-lt' },
        'a:ea': { propstypeface: '+mj-ea' },
        'a:cs': { propstypeface: '+mj-cs' },
      },
    },
  },
  'p:bodyStyle': {
    'a:lvl1pPr': {
      props: {
        marL: '342900',
        indent: '-342900',
        algn: 'l',
        defTabSz: '914400',
        rtl: '0',
        eaLnBrk: '1',
        latinLnBrk: '0',
        hangingPunct: '1',
      },
      'a:spcBef': { 'a:spcPct': { propsval: '20000' } },
      'a:buFont': {
        props: { typeface: 'Arial', pitchFamily: '34', charset: '0' },
      },
      'a:buChar': { propschar: '•' },
      'a:defRPr': {
        props: { sz: '3200', kern: '1200' },
        'a:solidFill': { 'a:schemeClr': { propsval: 'tx1' } },
        'a:latin': { propstypeface: '+mn-lt' },
        'a:ea': { propstypeface: '+mn-ea' },
        'a:cs': { propstypeface: '+mn-cs' },
      },
    },
    'a:lvl2pPr': {
      props: {
        marL: '742950',
        indent: '-285750',
        algn: 'l',
        defTabSz: '914400',
        rtl: '0',
        eaLnBrk: '1',
        latinLnBrk: '0',
        hangingPunct: '1',
      },
      'a:spcBef': { 'a:spcPct': { propsval: '20000' } },
      'a:buFont': {
        props: { typeface: 'Arial', pitchFamily: '34', charset: '0' },
      },
      'a:buChar': { propschar: '–' },
      'a:defRPr': {
        props: { sz: '2800', kern: '1200' },
        'a:solidFill': { 'a:schemeClr': { propsval: 'tx1' } },
        'a:latin': { propstypeface: '+mn-lt' },
        'a:ea': { propstypeface: '+mn-ea' },
        'a:cs': { propstypeface: '+mn-cs' },
      },
    },
    'a:lvl3pPr': {
      props: {
        marL: '1143000',
        indent: '-228600',
        algn: 'l',
        defTabSz: '914400',
        rtl: '0',
        eaLnBrk: '1',
        latinLnBrk: '0',
        hangingPunct: '1',
      },
      'a:spcBef': { 'a:spcPct': { propsval: '20000' } },
      'a:buFont': {
        props: { typeface: 'Arial', pitchFamily: '34', charset: '0' },
      },
      'a:buChar': { propschar: '•' },
      'a:defRPr': {
        props: { sz: '2400', kern: '1200' },
        'a:solidFill': { 'a:schemeClr': { propsval: 'tx1' } },
        'a:latin': { propstypeface: '+mn-lt' },
        'a:ea': { propstypeface: '+mn-ea' },
        'a:cs': { propstypeface: '+mn-cs' },
      },
    },
    'a:lvl4pPr': {
      props: {
        marL: '1600200',
        indent: '-228600',
        algn: 'l',
        defTabSz: '914400',
        rtl: '0',
        eaLnBrk: '1',
        latinLnBrk: '0',
        hangingPunct: '1',
      },
      'a:spcBef': { 'a:spcPct': { propsval: '20000' } },
      'a:buFont': {
        props: { typeface: 'Arial', pitchFamily: '34', charset: '0' },
      },
      'a:buChar': { propschar: '–' },
      'a:defRPr': {
        props: { sz: '2000', kern: '1200' },
        'a:solidFill': { 'a:schemeClr': { propsval: 'tx1' } },
        'a:latin': { propstypeface: '+mn-lt' },
        'a:ea': { propstypeface: '+mn-ea' },
        'a:cs': { propstypeface: '+mn-cs' },
      },
    },
    'a:lvl5pPr': {
      props: {
        marL: '2057400',
        indent: '-228600',
        algn: 'l',
        defTabSz: '914400',
        rtl: '0',
        eaLnBrk: '1',
        latinLnBrk: '0',
        hangingPunct: '1',
      },
      'a:spcBef': { 'a:spcPct': { propsval: '20000' } },
      'a:buFont': {
        props: { typeface: 'Arial', pitchFamily: '34', charset: '0' },
      },
      'a:buChar': { propschar: '»' },
      'a:defRPr': {
        props: { sz: '2000', kern: '1200' },
        'a:solidFill': { 'a:schemeClr': { propsval: 'tx1' } },
        'a:latin': { propstypeface: '+mn-lt' },
        'a:ea': { propstypeface: '+mn-ea' },
        'a:cs': { propstypeface: '+mn-cs' },
      },
    },
    'a:lvl6pPr': {
      props: {
        marL: '2514600',
        indent: '-228600',
        algn: 'l',
        defTabSz: '914400',
        rtl: '0',
        eaLnBrk: '1',
        latinLnBrk: '0',
        hangingPunct: '1',
      },
      'a:spcBef': { 'a:spcPct': { propsval: '20000' } },
      'a:buFont': {
        props: { typeface: 'Arial', pitchFamily: '34', charset: '0' },
      },
      'a:buChar': { propschar: '•' },
      'a:defRPr': {
        props: { sz: '2000', kern: '1200' },
        'a:solidFill': { 'a:schemeClr': { propsval: 'tx1' } },
        'a:latin': { propstypeface: '+mn-lt' },
        'a:ea': { propstypeface: '+mn-ea' },
        'a:cs': { propstypeface: '+mn-cs' },
      },
    },
    'a:lvl7pPr': {
      props: {
        marL: '2971800',
        indent: '-228600',
        algn: 'l',
        defTabSz: '914400',
        rtl: '0',
        eaLnBrk: '1',
        latinLnBrk: '0',
        hangingPunct: '1',
      },
      'a:spcBef': { 'a:spcPct': { propsval: '20000' } },
      'a:buFont': {
        props: { typeface: 'Arial', pitchFamily: '34', charset: '0' },
      },
      'a:buChar': { propschar: '•' },
      'a:defRPr': {
        props: { sz: '2000', kern: '1200' },
        'a:solidFill': { 'a:schemeClr': { propsval: 'tx1' } },
        'a:latin': { propstypeface: '+mn-lt' },
        'a:ea': { propstypeface: '+mn-ea' },
        'a:cs': { propstypeface: '+mn-cs' },
      },
    },
    'a:lvl8pPr': {
      props: {
        marL: '3429000',
        indent: '-228600',
        algn: 'l',
        defTabSz: '914400',
        rtl: '0',
        eaLnBrk: '1',
        latinLnBrk: '0',
        hangingPunct: '1',
      },
      'a:spcBef': { 'a:spcPct': { propsval: '20000' } },
      'a:buFont': {
        props: { typeface: 'Arial', pitchFamily: '34', charset: '0' },
      },
      'a:buChar': { propschar: '•' },
      'a:defRPr': {
        props: { sz: '2000', kern: '1200' },
        'a:solidFill': { 'a:schemeClr': { propsval: 'tx1' } },
        'a:latin': { propstypeface: '+mn-lt' },
        'a:ea': { propstypeface: '+mn-ea' },
        'a:cs': { propstypeface: '+mn-cs' },
      },
    },
    'a:lvl9pPr': {
      props: {
        marL: '3886200',
        indent: '-228600',
        algn: 'l',
        defTabSz: '914400',
        rtl: '0',
        eaLnBrk: '1',
        latinLnBrk: '0',
        hangingPunct: '1',
      },
      'a:spcBef': { 'a:spcPct': { propsval: '20000' } },
      'a:buFont': {
        props: { typeface: 'Arial', pitchFamily: '34', charset: '0' },
      },
      'a:buChar': { propschar: '•' },
      'a:defRPr': {
        props: { sz: '2000', kern: '1200' },
        'a:solidFill': { 'a:schemeClr': { propsval: 'tx1' } },
        'a:latin': { propstypeface: '+mn-lt' },
        'a:ea': { propstypeface: '+mn-ea' },
        'a:cs': { propstypeface: '+mn-cs' },
      },
    },
  },
  'p:otherStyle': {
    'a:defPPr': { 'a:defRPr': { propslang: 'en-US' } },
    'a:lvl1pPr': {
      props: {
        marL: '0',
        algn: 'l',
        defTabSz: '914400',
        rtl: '0',
        eaLnBrk: '1',
        latinLnBrk: '0',
        hangingPunct: '1',
      },
      'a:defRPr': {
        props: { sz: '1800', kern: '1200' },
        'a:solidFill': { 'a:schemeClr': { propsval: 'tx1' } },
        'a:latin': { propstypeface: '+mn-lt' },
        'a:ea': { propstypeface: '+mn-ea' },
        'a:cs': { propstypeface: '+mn-cs' },
      },
    },
    'a:lvl2pPr': {
      props: {
        marL: '457200',
        algn: 'l',
        defTabSz: '914400',
        rtl: '0',
        eaLnBrk: '1',
        latinLnBrk: '0',
        hangingPunct: '1',
      },
      'a:defRPr': {
        props: { sz: '1800', kern: '1200' },
        'a:solidFill': { 'a:schemeClr': { propsval: 'tx1' } },
        'a:latin': { propstypeface: '+mn-lt' },
        'a:ea': { propstypeface: '+mn-ea' },
        'a:cs': { propstypeface: '+mn-cs' },
      },
    },
    'a:lvl3pPr': {
      props: {
        marL: '914400',
        algn: 'l',
        defTabSz: '914400',
        rtl: '0',
        eaLnBrk: '1',
        latinLnBrk: '0',
        hangingPunct: '1',
      },
      'a:defRPr': {
        props: { sz: '1800', kern: '1200' },
        'a:solidFill': { 'a:schemeClr': { propsval: 'tx1' } },
        'a:latin': { propstypeface: '+mn-lt' },
        'a:ea': { propstypeface: '+mn-ea' },
        'a:cs': { propstypeface: '+mn-cs' },
      },
    },
    'a:lvl4pPr': {
      props: {
        marL: '1371600',
        algn: 'l',
        defTabSz: '914400',
        rtl: '0',
        eaLnBrk: '1',
        latinLnBrk: '0',
        hangingPunct: '1',
      },
      'a:defRPr': {
        props: { sz: '1800', kern: '1200' },
        'a:solidFill': { 'a:schemeClr': { propsval: 'tx1' } },
        'a:latin': { propstypeface: '+mn-lt' },
        'a:ea': { propstypeface: '+mn-ea' },
        'a:cs': { propstypeface: '+mn-cs' },
      },
    },
    'a:lvl5pPr': {
      props: {
        marL: '1828800',
        algn: 'l',
        defTabSz: '914400',
        rtl: '0',
        eaLnBrk: '1',
        latinLnBrk: '0',
        hangingPunct: '1',
      },
      'a:defRPr': {
        props: { sz: '1800', kern: '1200' },
        'a:solidFill': { 'a:schemeClr': { propsval: 'tx1' } },
        'a:latin': { propstypeface: '+mn-lt' },
        'a:ea': { propstypeface: '+mn-ea' },
        'a:cs': { propstypeface: '+mn-cs' },
      },
    },
    'a:lvl6pPr': {
      props: {
        marL: '2286000',
        algn: 'l',
        defTabSz: '914400',
        rtl: '0',
        eaLnBrk: '1',
        latinLnBrk: '0',
        hangingPunct: '1',
      },
      'a:defRPr': {
        props: { sz: '1800', kern: '1200' },
        'a:solidFill': { 'a:schemeClr': { propsval: 'tx1' } },
        'a:latin': { propstypeface: '+mn-lt' },
        'a:ea': { propstypeface: '+mn-ea' },
        'a:cs': { propstypeface: '+mn-cs' },
      },
    },
    'a:lvl7pPr': {
      props: {
        marL: '2743200',
        algn: 'l',
        defTabSz: '914400',
        rtl: '0',
        eaLnBrk: '1',
        latinLnBrk: '0',
        hangingPunct: '1',
      },
      'a:defRPr': {
        props: { sz: '1800', kern: '1200' },
        'a:solidFill': { 'a:schemeClr': { propsval: 'tx1' } },
        'a:latin': { propstypeface: '+mn-lt' },
        'a:ea': { propstypeface: '+mn-ea' },
        'a:cs': { propstypeface: '+mn-cs' },
      },
    },
    'a:lvl8pPr': {
      props: {
        marL: '3200400',
        algn: 'l',
        defTabSz: '914400',
        rtl: '0',
        eaLnBrk: '1',
        latinLnBrk: '0',
        hangingPunct: '1',
      },
      'a:defRPr': {
        props: { sz: '1800', kern: '1200' },
        'a:solidFill': { 'a:schemeClr': { propsval: 'tx1' } },
        'a:latin': { propstypeface: '+mn-lt' },
        'a:ea': { propstypeface: '+mn-ea' },
        'a:cs': { propstypeface: '+mn-cs' },
      },
    },
    'a:lvl9pPr': {
      props: {
        marL: '3657600',
        algn: 'l',
        defTabSz: '914400',
        rtl: '0',
        eaLnBrk: '1',
        latinLnBrk: '0',
        hangingPunct: '1',
      },
      'a:defRPr': {
        props: { sz: '1800', kern: '1200' },
        'a:solidFill': { 'a:schemeClr': { propsval: 'tx1' } },
        'a:latin': { propstypeface: '+mn-lt' },
        'a:ea': { propstypeface: '+mn-ea' },
        'a:cs': { propstypeface: '+mn-cs' },
      },
    },
  },
})

const slideMaster = {
  'p:cSld': getSlideContent(),
  'p:clrMap': getColorMap(),
  'p:sldLayoutIdLst': [],
  'p:txStyles': getTextStyles(),
}

module.exports = {
  slideMaster,
}
