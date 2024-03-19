/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const notesCtrl = require("../../controllers/api/notes");
// const ensureLoggedIn = require("../../config/ensureLoggedIn");

// POST /api/notes
router.post("/", notesCtrl.create);

module.exports = router;