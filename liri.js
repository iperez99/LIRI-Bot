//Dependencies//

require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var Spotify = require("node-spotify-api");
var moment = require("moment");
var axios = require("axios");
var fs = require("fs");

//Optional dependency set with const so the variable is not re-assigned//
const chalk = require("chalk");

// User options//
var userOption = process.argv[2];
var userTerm = process.argv.slice(3).join(" ");

function start() {
    switch (userOption) {
        case "concert-this":
            getConcert();
            break;
        case "spotify-this-song":
            getSpotify();
            break;
        case "movie-this":
            getMovie();
            break;
        case "do-what-it-says":
            getWhat();
            break;
        default:
            console.log("LIRI does not know that")
    }
};

//Function to find concerts//
function getConcert() {
    axios.get("https://rest.bandsintown.com/artists/" + userTerm + "/events?app_id=codingbootcamp").then(function (response) {
        var jsonData = response.data[0];
        //moment.js variable to get date and time format//
        dateGet = moment(jsonData.datetime).format("MM/DD/YYY");
        // variable that will have the concert information//
        var concertGet = `
 Name of the venue: ${chalk.green(jsonData.venue.name)}
 Venue location:    ${chalk.blue(jsonData.venue.city)}    
 Date of the Event: ${chalk.magenta(dateGet)}
 `;
    
    console.log(concertGet);

    });

};


