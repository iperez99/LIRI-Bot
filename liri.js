//Dependencies//

require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var Spotify = require("node-spotify-api");
var moment = require("moment");
var axios = require("axios");
var fs = require("fs");
var request = require("request");

//Optional dependency set with const so the variable is not re-assigned//
const chalk = require("chalk");

