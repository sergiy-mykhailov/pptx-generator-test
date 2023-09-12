const theme = {
  'a:themeElements': {
    // colors
    'a:clrScheme': {
      props: { name: 'Office' },
      'a:dk1': {
        'a:sysClr': { props: { val: 'windowText', lastClr: '000000' } },
      },
      'a:lt1': { 'a:sysClr': { props: { val: 'window', lastClr: 'FFFFFF' } } },
      'a:dk2': { 'a:srgbClr': { props: { val: '1F497D' } } },
      'a:lt2': { 'a:srgbClr': { props: { val: 'EEECE1' } } },
      'a:accent1': { 'a:srgbClr': { props: { val: '4F81BD' } } },
      'a:accent2': { 'a:srgbClr': { props: { val: 'C0504D' } } },
      'a:accent3': { 'a:srgbClr': { props: { val: '9BBB59' } } },
      'a:accent4': { 'a:srgbClr': { props: { val: '8064A2' } } },
      'a:accent5': { 'a:srgbClr': { props: { val: '4BACC6' } } },
      'a:accent6': { 'a:srgbClr': { props: { val: 'F79646' } } },
      'a:hlink': { 'a:srgbClr': { props: { val: '0000FF' } } },
      'a:folHlink': { 'a:srgbClr': { props: { val: '800080' } } },
    },
    // fonts
    'a:fontScheme': {
      props: { name: 'Office' },
      // 'a:majorFont': {
      //   'a:latin': { props: { typeface: 'Arial' } },
      //   'a:ea': { props: { typeface: '' } },
      //   'a:cs': { props: { typeface: '' } },
      // },
      // 'a:minorFont': {
      //   'a:latin': { props: { typeface: 'Calibri' } },
      //   'a:ea': { props: { typeface: '' } },
      //   'a:cs': { props: { typeface: '' } },
      // },
      // alternative:
      'a:majorFont': {
        'a:latin': { props: { typeface: 'Calibri' } },
        'a:ea': { props: { typeface: '' } },
        'a:cs': { props: { typeface: '' } },
        'a:font': [
          { props: { script: 'Jpan', typeface: 'ＭＳ Ｐゴシック' } },
          { props: { script: 'Hang', typeface: '맑은 고딕' } },
          { props: { script: 'Hans', typeface: '宋体' } },
          { props: { script: 'Hant', typeface: '新細明體' } },
          { props: { script: 'Arab', typeface: 'Times New Roman' } },
          { props: { script: 'Hebr', typeface: 'Times New Roman' } },
          { props: { script: 'Thai', typeface: 'Angsana New' } },
          { props: { script: 'Ethi', typeface: 'Nyala' } },
          { props: { script: 'Beng', typeface: 'Vrinda' } },
          { props: { script: 'Gujr', typeface: 'Shruti' } },
          { props: { script: 'Khmr', typeface: 'MoolBoran' } },
          { props: { script: 'Knda', typeface: 'Tunga' } },
          { props: { script: 'Guru', typeface: 'Raavi' } },
          { props: { script: 'Cans', typeface: 'Euphemia' } },
          { props: { script: 'Cher', typeface: 'Plantagenet Cherokee' } },
          { props: { script: 'Yiii', typeface: 'Microsoft Yi Baiti' } },
          { props: { script: 'Tibt', typeface: 'Microsoft Himalaya' } },
          { props: { script: 'Thaa', typeface: 'MV Boli' } },
          { props: { script: 'Deva', typeface: 'Mangal' } },
          { props: { script: 'Telu', typeface: 'Gautami' } },
          { props: { script: 'Taml', typeface: 'Latha' } },
          { props: { script: 'Syrc', typeface: 'Estrangelo Edessa' } },
          { props: { script: 'Orya', typeface: 'Kalinga' } },
          { props: { script: 'Mlym', typeface: 'Kartika' } },
          { props: { script: 'Laoo', typeface: 'DokChampa' } },
          { props: { script: 'Sinh', typeface: 'Iskoola Pota' } },
          { props: { script: 'Mong', typeface: 'Mongolian Baiti' } },
          { props: { script: 'Viet', typeface: 'Times New Roman' } },
          { props: { script: 'Uigh', typeface: 'Microsoft Uighur' } },
        ],
      },
      'a:minorFont': {
        'a:latin': { propstypeface: 'Calibri' },
        'a:ea': { propstypeface: '' },
        'a:cs': { propstypeface: '' },
        'a:font': [
          { props: { script: 'Jpan', typeface: 'ＭＳ Ｐゴシック' } },
          { props: { script: 'Hang', typeface: '맑은 고딕' } },
          { props: { script: 'Hans', typeface: '宋体' } },
          { props: { script: 'Hant', typeface: '新細明體' } },
          { props: { script: 'Arab', typeface: 'Arial' } },
          { props: { script: 'Hebr', typeface: 'Arial' } },
          { props: { script: 'Thai', typeface: 'Cordia New' } },
          { props: { script: 'Ethi', typeface: 'Nyala' } },
          { props: { script: 'Beng', typeface: 'Vrinda' } },
          { props: { script: 'Gujr', typeface: 'Shruti' } },
          { props: { script: 'Khmr', typeface: 'DaunPenh' } },
          { props: { script: 'Knda', typeface: 'Tunga' } },
          { props: { script: 'Guru', typeface: 'Raavi' } },
          { props: { script: 'Cans', typeface: 'Euphemia' } },
          { props: { script: 'Cher', typeface: 'Plantagenet Cherokee' } },
          { props: { script: 'Yiii', typeface: 'Microsoft Yi Baiti' } },
          { props: { script: 'Tibt', typeface: 'Microsoft Himalaya' } },
          { props: { script: 'Thaa', typeface: 'MV Boli' } },
          { props: { script: 'Deva', typeface: 'Mangal' } },
          { props: { script: 'Telu', typeface: 'Gautami' } },
          { props: { script: 'Taml', typeface: 'Latha' } },
          { props: { script: 'Syrc', typeface: 'Estrangelo Edessa' } },
          { props: { script: 'Orya', typeface: 'Kalinga' } },
          { props: { script: 'Mlym', typeface: 'Kartika' } },
          { props: { script: 'Laoo', typeface: 'DokChampa' } },
          { props: { script: 'Sinh', typeface: 'Iskoola Pota' } },
          { props: { script: 'Mong', typeface: 'Mongolian Baiti' } },
          { props: { script: 'Viet', typeface: 'Arial' } },
          { props: { script: 'Uigh', typeface: 'Microsoft Uighur' } },
        ],
      },
    },
    'a:fmtScheme': {
      props: { name: 'Office' },
      'a:fillStyleLst': {
        'a:solidFill': { 'a:schemeClr': { props: { val: 'phClr' } } },
        'a:gradFill': [
          {
            props: { rotWithShape: '1' },
            'a:gsLst': {
              'a:gs': [
                {
                  props: { pos: '0' },
                  'a:schemeClr': {
                    props: { val: 'phClr' },
                    'a:tint': { props: { val: '50000' } },
                    'a:satMod': { props: { val: '300000' } },
                  },
                },
                {
                  props: { pos: '35000' },
                  'a:schemeClr': {
                    props: { val: 'phClr' },
                    'a:tint': { props: { val: '37000' } },
                    'a:satMod': { props: { val: '300000' } },
                  },
                },
                {
                  props: { pos: '100000' },
                  'a:schemeClr': {
                    props: { val: 'phClr' },
                    'a:tint': { props: { val: '15000' } },
                    'a:satMod': { props: { val: '350000' } },
                  },
                },
              ],
            },
            'a:lin': { props: { ang: '16200000', scaled: '1' } },
          },
          {
            props: { rotWithShape: '1' },
            'a:gsLst': {
              'a:gs': [
                {
                  props: { pos: '0' },
                  'a:schemeClr': {
                    props: { val: 'phClr' },
                    'a:shade': { props: { val: '51000' } },
                    'a:satMod': { props: { val: '130000' } },
                  },
                },
                {
                  props: { pos: '80000' },
                  'a:schemeClr': {
                    props: { val: 'phClr' },
                    'a:shade': { props: { val: '93000' } },
                    'a:satMod': { props: { val: '130000' } },
                  },
                },
                {
                  props: { pos: '100000' },
                  'a:schemeClr': {
                    props: { val: 'phClr' },
                    'a:shade': { props: { val: '94000' } },
                    'a:satMod': { props: { val: '135000' } },
                  },
                },
              ],
            },
            'a:lin': { props: { ang: '16200000', scaled: '0' } },
          },
        ],
      },
      'a:lnStyleLst': {
        'a:ln': [
          {
            props: { w: '9525', cap: 'flat', cmpd: 'sng', algn: 'ctr' },
            'a:solidFill': {
              'a:schemeClr': {
                props: { val: 'phClr' },
                'a:shade': { props: { val: '95000' } },
                'a:satMod': { props: { val: '105000' } },
              },
            },
            'a:prstDash': { props: { val: 'solid' } },
          },
          {
            props: { w: '25400', cap: 'flat', cmpd: 'sng', algn: 'ctr' },
            'a:solidFill': { 'a:schemeClr': { props: { val: 'phClr' } } },
            'a:prstDash': { props: { val: 'solid' } },
          },
          {
            props: { w: '38100', cap: 'flat', cmpd: 'sng', algn: 'ctr' },
            'a:solidFill': { 'a:schemeClr': { props: { val: 'phClr' } } },
            'a:prstDash': { props: { val: 'solid' } },
          },
        ],
      },
      'a:effectStyleLst': {
        'a:effectStyle': [
          {
            'a:effectLst': {
              'a:outerShdw': {
                props: {
                  blurRad: '40000',
                  dist: '20000',
                  dir: '5400000',
                  rotWithShape: '0',
                },
                'a:srgbClr': {
                  props: { val: '000000' },
                  'a:alpha': { props: { val: '38000' } },
                },
              },
            },
          },
          {
            'a:effectLst': {
              'a:outerShdw': {
                props: {
                  blurRad: '40000',
                  dist: '23000',
                  dir: '5400000',
                  rotWithShape: '0',
                },
                'a:srgbClr': {
                  props: { val: '000000' },
                  'a:alpha': { props: { val: '35000' } },
                },
              },
            },
          },
          {
            'a:effectLst': {
              'a:outerShdw': {
                props: {
                  blurRad: '40000',
                  dist: '23000',
                  dir: '5400000',
                  rotWithShape: '0',
                },
                'a:srgbClr': {
                  props: { val: '000000' },
                  'a:alpha': { props: { val: '35000' } },
                },
              },
            },
            'a:scene3d': {
              'a:camera': {
                propsprst: 'orthographicFront',
                'a:rot': { props: { lat: '0', lon: '0', rev: '0' } },
              },
              'a:lightRig': {
                props: { rig: 'threePt', dir: 't' },
                'a:rot': { props: { lat: '0', lon: '0', rev: '1200000' } },
              },
            },
            'a:sp3d': { 'a:bevelT': { props: { w: '63500', h: '25400' } } },
          },
        ],
      },
      'a:bgFillStyleLst': {
        'a:solidFill': { 'a:schemeClr': { props: { val: 'phClr' } } },
        'a:gradFill': [
          {
            propsrotWithShape: '1',
            'a:gsLst': {
              'a:gs': [
                {
                  props: { pos: '0' },
                  'a:schemeClr': {
                    props: { val: 'phClr' },
                    'a:tint': { props: { val: '40000' } },
                    'a:satMod': { props: { val: '350000' } },
                  },
                },
                {
                  props: { pos: '40000' },
                  'a:schemeClr': {
                    props: { val: 'phClr' },
                    'a:tint': { props: { val: '45000' } },
                    'a:shade': { props: { val: '99000' } },
                    'a:satMod': { props: { val: '350000' } },
                  },
                },
                {
                  props: { pos: '100000' },
                  'a:schemeClr': {
                    props: { val: 'phClr' },
                    'a:shade': { props: { val: '20000' } },
                    'a:satMod': { props: { val: '255000' } },
                  },
                },
              ],
            },
            'a:path': {
              propspath: 'circle',
              'a:fillToRect': {
                props: { l: '50000', t: '-80000', r: '50000', b: '180000' },
              },
            },
          },
          {
            propsrotWithShape: '1',
            'a:gsLst': {
              'a:gs': [
                {
                  props: { pos: '0' },
                  'a:schemeClr': {
                    props: { val: 'phClr' },
                    'a:tint': { props: { val: '80000' } },
                    'a:satMod': { props: { val: '300000' } },
                  },
                },
                {
                  props: { pos: '100000' },
                  'a:schemeClr': {
                    props: { val: 'phClr' },
                    'a:shade': { props: { val: '30000' } },
                    'a:satMod': { props: { val: '200000' } },
                  },
                },
              ],
            },
            'a:path': {
              propspath: 'circle',
              'a:fillToRect': {
                props: { l: '50000', t: '50000', r: '50000', b: '50000' },
              },
            },
          },
        ],
      },
    },
  },
  'a:objectDefaults': {},
  'a:extraClrSchemeLst': {},
}

module.exports = {
  theme,
}
