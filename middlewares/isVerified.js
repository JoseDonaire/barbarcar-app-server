const { expressjwt } = require("express-jwt");
//verifica si el token es válido y nos permite acceder al payload

const isVerified = expressjwt({
  secret: process.env.TOKEN_SECRET,
  algorithms: ["HS256"],
  requestProperty: "payload",
  getToken: (req) => {
    console.log(req.headers);
    if (req.headers === undefined || req.headers.authorization === undefined) {
      return null;
    }
    const tokenArr = req.headers.authorization.split(" ");
    const tokenType = tokenArr[0];
    const theToken = tokenArr[1];

    if (tokenType !== "Bearer") {
      console.log("token de tipo invalido");
      return null;
    }
    console.log("token extraido");
    return theToken;
  },
});

module.exports = isVerified;
