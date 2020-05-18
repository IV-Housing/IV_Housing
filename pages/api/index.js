import { initDatabase } from "../../utils/mongodb";
const opencage = require('opencage-api-client');

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
    case "POST":{
      //addLatLng();
    }
    default: 
      res.statusCode = 405;
      res.end("Method not found");
  }
}