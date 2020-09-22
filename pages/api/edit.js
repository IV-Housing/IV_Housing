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
    const res = await geocoder.geocode({
      address: add,
      countryCode: 'us',
      limit: 1
    });
  
    return res[0];
}
  
async function updateListing(req) {
    let house = JSON.parse(req.body);
    let update = {};
    if(house.addrChange){
      let result = await getLatLng(house.address);
      update = {
        address: house.address, 
        addrNum: house.addrNum,
        addrStreet: house.addrStreet,
        aptNum: house.aptNum,
        size: parseInt(house.size), 
        totalPrice: parseInt(house.totalPrice), 
        website: house.website, 
        phone: house.phone, 
        email: house.email,
        lat: result.latitude, 
        lng: result.longitude,
      }
    }else{
      update = {
        size: parseInt(house.size), 
        totalPrice: parseInt(house.totalPrice), 
        website: house.website, 
        phone: house.phone, 
        email: house.email,
      }
    }
  
    const client = await initDatabase();
    client.collection("Houses").findOneAndUpdate(
      {_id : ObjectId(house.id)},
      {$set: update},
    );
}

async function deleteListing(req){
  let house = JSON.parse(req.body);
  //console.log(house.id);
  let client = await initDatabase();
  client.collection("Houses").deleteOne({_id : ObjectId(house.id)});

  client = await initDatabase();
  const users = client.collection("Users");
  users.updateMany({}, {$pull: {houses: ObjectId(house.id)}});
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
      case "DELETE" : {
        deleteListing(req);
        res.statusCode = 200;
        res.end();
        break;
      }
      default: 
        res.statusCode = 405;
        res.end("Method not found");
    }
  }