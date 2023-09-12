const { XMLNS } = require('../constants/common')

const presProps = {
  'p:extLst': {
    children: [
      {
        'p:ext': {
          props: { uri: '{E76CE94A-603C-4142-B9EB-6D1370010A27}' },
          'p14:discardImageEditData': {
            props: { 'xmlns:p14': XMLNS.p14, val: 0 },
          },
        },
      },
      {
        'p:ext': {
          props: { uri: '{D31A062A-798A-4329-ABDD-BBA856620510}' },
          'p14:defaultImageDpi': {
            props: { 'xmlns:p14': XMLNS.p14, val: 220 },
          },
        },
      },
      {
        'p:ext': {
          props: { uri: '{FD5EFAAD-0ECE-453E-9831-46B23BE46B34}' },
          'p15:chartTrackingRefBased': {
            props: { 'xmlns:p15': XMLNS.p15, val: 0 },
          },
        },
      },
    ],
  },
}

module.exports = {
  presProps,
}
