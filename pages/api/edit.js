import { initDatabase } from "../../utils/mongodb"
import NodeGeocoder from 'node-geocoder'
import { ObjectId } from "mongodb";

export async function getUsers(){
    const client = await initDatabase();
    const users = client.collection("Users");
  
    return users.find().toArray();
}

async function updateAvail(req){
  let info = JSON.parse(req.body);

  const client = await initDatabase();
  let avail = true;
  if(info.availability === "false"){
    avail = false;
  }

  client.collection("Houses").findOneAndUpdate(
    {_id : ObjectId(info.id)},
    {$set: {availability: avail}},
  );
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
  
async function updateListing(req) {
    // let house = JSON.parse(req.body);
    // let result = await getLatLng(house.address);
  
    // console.log(house.company);
    // console.log(house.address);
    // console.log(house.size);
    // console.log(house.totalPrice);
    // console.log(house.totalPrice/house.size);
    // console.log(house.website);
    // console.log(house.phone);
    // console.log(result.latitude);
    // console.log(result.longitude);
  
    // const client = await initDatabase();
    // client.collection("Houses").insertOne(
    //   { company: house.company, 
    //     address: house.address, 
    //     size: parseInt(house.size), 
    //     totalPrice: parseInt(house.totalPrice), 
    //     website: house.website, 
    //     phone: house.phone, 
    //     lat: result.latitude, 
    //     lng: result.longitude,
    //     availability: true,
    //     newlyAdded: true,
    //   }, 
    //   function(err, res) {
    //     if (err) throw err;
    // });
}
  
  export default async function performAction(req, res) {
    switch (req.method) {
      case "GET": {
        var list = await getUsers(req);
        res.statusCode = 200;
        res.end(JSON.stringify(list));
        break;
      }
      case "PUT" : { 
        updateAvail(req);
        res.statusCode = 200;
        res.end();
        break;
      }
      case "POST" : {
        updateListing(req);
        res.statusCode = 200;
        res.end();
        break;
      }
      default: 
        res.statusCode = 405;
        res.end("Method not found");
    }
  }