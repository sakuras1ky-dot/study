const express = require("express");
const path = require("path");
const fs = require("fs");
const routes = express.Router();




routes.use("/mine",require("./mine/minening"));


module.exports = routes;