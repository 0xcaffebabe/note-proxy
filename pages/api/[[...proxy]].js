// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
  const filename = encodeURI(req.query.proxy.join('/'))
  res.writeHead(200, {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Method': '*'})
  res.write(await (await fetch('https://github.com/0xcaffebabe/note/raw/gh-pages/' + filename)).text())
  res.end()
}
