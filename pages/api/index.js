import { initDatabase } from "../../utils/mongodb"
import NodeGeocoder from 'node-geocoder'

export async function getHouses(){
  const client = await initDatabase();
  const houses = client.collection("Houses");

  return houses.find().toArray();
}

async function getLatLng(add){
  const options = {
    provider: 'opencage',
    apiKey: process.env.OPENCAGE,
    formatter: null
  };

  const geocoder = NodeGeocoder(options);

  add = add + " 93117"
  console.log(add);
  const res = await geocoder.geocode({
    address: add,
    countryCode: 'us',
    limit: 1
  });

  return res[0];
}

async function createListing(req) {
  let house = JSON.parse(req.body);
  let result = await getLatLng(house.address);

  console.log(house.company);
  console.log(house.address);
  console.log(house.size);
  console.log(house.totalPrice);
  console.log(house.totalPrice/house.size);
  console.log(house.website);
  console.log(house.phone);
  console.log(result.latitude);
  console.log(result.longitude);

  const client = await initDatabase();
  client.collection("Houses").insertOne(
    { company: house.company, 
      address: house.address, 
      size: house.size, 
      totalPrice: house.totalPrice, 
      pricePerPerson: 1, 
      website: house.website, 
      phone: house.phone, 
      lat: result.latitude, 
      lng: result.longitude
    }, 
    function(err, res) {
      if (err) throw err;
      //client.close();
  });
}

export default async function performAction(req, res) {
  switch (req.method) {
    case "GET": {
      var list = await getHouses();
      res.statusCode = 200;
      res.end(JSON.stringify(list));
      break;
    }
    case "POST" : {
      createListing(req);
      res.statusCode = 200;
      res.end();
      break;
    }
    default: 
      res.statusCode = 405;
      res.end("Method not found");
  }
}

