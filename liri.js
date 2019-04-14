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

// User options//
var userOption = process.argv[2];
var userTerm = process.argv.slice(3).join(" ");

var userPicks = function(userData, functionData) {
    switch (userData) {
        case "concert-this":
            getConcert(functionData);
            break;
        case "spotify-this-song":
            getSpotify(functionData);
            break;
        case "movie-this":
            getMovie(functionData);
            break;
        case "do-what-it-says":
            getWhat(functionData);
            break;
        default:
            console.log("LIRI does not know that")
    }
};