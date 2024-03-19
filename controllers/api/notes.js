/* eslint-disable no-undef */
const Note = require("../../models/Note");

async function create(req, res) {
  try {
    const note = await Note.create(req.body);
    res.json(note);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  create,
};
