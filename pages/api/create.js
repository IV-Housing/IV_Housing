import { initDatabase } from "../../utils/mongodb"
import NodeGeocoder from 'node-geocoder'

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
  
  async function createListing(req) {
    let house = JSON.parse(req.body);
    let result = await getLatLng(house.address);
  
    // console.log(house.company);
    // console.log(house.address);
    // console.log(house.size);
    // console.log(house.totalPrice);
    // console.log(house.totalPrice/house.size);
    // console.log(house.website);
    // console.log(house.phone);
    // console.log(result.latitude);
    // console.log(result.longitude);
  
    const client = await initDatabase();
    let id = client.collection("Houses").insertOne(
      { company: house.company, 
        address: house.address, 
        addrNum: house.addrNum,
        addrStreet: house.addrStreet,
        aptNum: house.aptNum,
        size: parseInt(house.size), 
        totalPrice: parseInt(house.totalPrice), 
        website: house.website, 
        phone: house.phone, 
        lat: result.latitude, 
        lng: result.longitude,
        availability: true,
        newlyAdded: true,
        notes: house.notes,
        email: house.email,
      }).then(result => {
          client.collection("Users").findOneAndUpdate(
            { email : house.userEmail },
            { 
                $setOnInsert: {email : house.userEmail},
                $push: { houses : result.insertedId},
            },
            { upsert: true },
        );
      });
  }
  
  export default async function performAction(req, res) {
    switch (req.method) {
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