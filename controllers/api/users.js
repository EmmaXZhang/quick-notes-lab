/* eslint-disable no-undef */
function create(req, res) {
  const userData = {
    name: req.body.name,
    email: req.body.email,
  };
  res.json(userData);
}

module.exports = {
  create,
};
