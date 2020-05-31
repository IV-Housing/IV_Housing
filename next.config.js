require("dotenv").config();

function mongodb_uri() {
    if (process.env.NODE_ENV === "production") {
      return process.env.MONGODB_URI_PRODUCTION;
    } else if (process.env.NODE_ENV === "staging") {
      return process.env.MONGODB_URI_STAGING;
    } else if (process.env.USE_TEST_AUTH) {
      return process.env.MONGODB_URI_TEST;
    }
    return process.env.MONGODB_URI;
  }

var token = process.env.MAP_TOKEN_PROD;
if(process.env.MAP_TOKEN_LOCAL){
    token = process.env.MAP_TOKEN_LOCAL;
}
module.exports = {
    env: {
        USE_TEST_AUTH: process.env.USE_TEST_AUTH,
        AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
        AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
        AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
        AUTH0_SCOPE: "openid profile email",
        REDIRECT_URI:
        process.env.REDIRECT_URI || "http://localhost:3000/api/callback",
        POST_LOGOUT_REDIRECT_URI:
        process.env.POST_LOGOUT_REDIRECT_URI || "http://localhost:3000/",
        SESSION_COOKIE_SECRET:
        process.env.SESSION_COOKIE_SECRET ||
        "viloxyf_z2GW6K4CT-KQD_MoLEA2wqv5jWuq4Jd0P7ymgG5GJGMpvMneXZzhK3sL",
        SESSION_COOKIE_LIFETIME: 7200, // 2 hours
        MAP_TOKEN: token,
        MONGODB_URI: mongodb_uri(),
    },
}