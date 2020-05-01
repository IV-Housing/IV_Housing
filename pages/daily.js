import nextConnect from 'next-connect';
import middleware from '../database';

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req, res) => {

    let doc = await req.db.collection('daily').findOne()
    console.log(doc);
    res.json(doc);
});

export default handler;

// export default (req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'application/json')
//   res.end(JSON.stringify({ message: 'Hello from the Daily route' }))
// }