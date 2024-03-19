/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const Note = require("../../models/Note");

async function create(req, res) {
  try {
    const note = await Note.create({
      //specify the property in req.body
      text: req.body.text,
      user: req.user._id,
    });
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

async function deleteNote(req, res) {
  try {
    await Note.deleteOne({ _id: req.params.id, user: req.user._id });
    res.json(true);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  create,
  index,
  delete: deleteNote,
};
