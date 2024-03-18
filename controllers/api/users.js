/* eslint-disable no-undef */
const User = require("../../models/user");
const jwt = require("jsonwebtoken");

//for handling HTTP requests related to user creation in a RESTful API.
async function create(req, res) {
  try {
    //The create() function is to handle the creation of a new user.
    const user = await User.create(req.body);

    const token = createJWT(user);

    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

//helper function
function createJWT(userData) {
  //sign (in jsonwebtoken library) -> create JWTs
  const syncToken = jwt.sign(
    // data payload
    { user: userData },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
  console.log("syncToken", syncToken);
  return syncToken;
}

module.exports = {
  create,
};
