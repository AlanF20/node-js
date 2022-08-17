const express = require("express");
const { getItems, getItem, createItems } = require("../controllers/tracks");
const router = express.Router();

router.get("/", getItems)

router.post('/', createItems)

module.exports = router