const appProps = {
  TotalTime: 0,
  Words: 1,
  Application: 'Microsoft Macintosh PowerPoint',
  PresentationFormat: 'On-screen Show (4:3)',
  Paragraphs: 1,
  Slides: 0,
  Notes: 0,
  HiddenSlides: 0,
  MMClips: 0,
  ScaleCrop: false,
  HeadingPairs: {
    'vt:vector': {
      props: { size: 6, baseType: 'variant' },
      children: [
        { 'vt:variant': { 'vt:lpstr': 'Fonts Used' } },
        { 'vt:variant': { 'vt:i4': '2' } },
        { 'vt:variant': { 'vt:lpstr': 'Theme' } },
        { 'vt:variant': { 'vt:i4': '1' } },
        { 'vt:variant': { 'vt:lpstr': 'Slide Titles' } },
        { 'vt:variant': { 'vt:i4': '1' } },
      ],
    },
  },
  TitlesOfParts: {
    'vt:vector': {
      props: { size: 4, baseType: 'lpstr' },
      children: [
        { 'vt:lpstr': 'Arial' },
        { 'vt:lpstr': 'Calibri' },
        { 'vt:lpstr': 'Default Theme' },
        { 'vt:lpstr': 'PowerPoint Presentation' },
      ],
    },
  },
  LinksUpToDate: false,
  SharedDoc: false,
  HyperlinksChanged: false,
  AppVersion: '16.0000',
}

module.exports = {
  appProps,
}
