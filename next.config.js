require("dotenv").config();
var token = process.env.MAP_TOKEN_PROD;
if(process.env.MAP_TOKEN_LOCAL){
    token = process.env.MAP_TOKEN_LOCAL;
}
module.exports = {
    env: {
        MAP_TOKEN: token,
        MONGODB_URI: process.env.MONGODB_URI,
    },
}