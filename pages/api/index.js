import { initDatabase } from "../../utils/mongodb"

export async function getHouses(){
  const client = await initDatabase();
  const houses = client.collection("Houses");

  return houses.find().toArray();
}

export default async function performAction(req, res) {
  switch (req.method) {
    case "GET": {
      var list = await getHouses();
      res.statusCode = 200;
      res.end(JSON.stringify(list));
      break;
    }
    default: 
      res.statusCode = 405;
      res.end("Method not found");
  }
}

