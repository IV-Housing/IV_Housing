import { initDatabase } from "../../utils/mongodb";

export async function getHouses(){
  const client = await initDatabase();
  const houses = client.collection("Houses");

  return houses.find().toArray();
}

async function createListing(req) {
  const { address } = req.body;

  if (!email) {
    throw {
      status: 400,
      message: "Missing email",
    };
  }

  const client = await initDatabase();
  const users = client.collection("users");

  const query = {
    email,
  };

  const mutation = {
    $setOnInsert: {
      email,
    },
    $set: {
      role: "admin",
    },
  };

  const result = await users.findOneAndUpdate(query, mutation, {
    upsert: true,
    returnOriginal: false,
  });

  return result.value;
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
      return createListing(req);
    }
    default: 
      res.statusCode = 405;
      res.end("Method not found");
  }
}

