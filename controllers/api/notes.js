/* eslint-disable no-unused-vars */
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

async function index(req, res) {
  try {
    const notes = await Note.find({});
    res.json(notes);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  create,
  index,
};
