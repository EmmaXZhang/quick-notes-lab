/* eslint-disable no-undef */
function create(req, res) {
  console.log("req.body", req.body);
  const userData = {
    name: req.body.name,
    email: req.body.email,
  };
  console.log(userData);
  // Baby step...
  res.json(userData);
}

module.exports = {
  create,
};
