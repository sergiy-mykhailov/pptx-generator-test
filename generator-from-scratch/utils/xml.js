const { create, fragment } = require('xmlbuilder2')

const buildXml = (content, prettyPrint = true) => {
  const root = create()
    .dec({ encoding: 'UTF-8', standalone: true })
    .set({ convert: { att: 'props', text: 'children' } })

  root.ele(content)

  // getFromFragment()

  return root.end({ prettyPrint })
}

const getFromFragment = () => {
  const frag1 = fragment(`
   
  `)

  const obj = frag1.set({ convert: { att: 'props', text: 'children' } }).toObject({ group: true })

  console.log('-- getFromFragment:')
  console.dir(obj, { depth: null, colors: true })
}

module.exports = {
  buildXml,
  getFromFragment,
}
