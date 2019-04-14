//Dependencies//

require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
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
    axios.get("https://rest.bandsintown.com/artists/" + userTerm + "/events?app_id=codingbootcamp")
    .then(function (response) {
        var jsonData = response.data[0];
        //moment.js variable to get date and time format//
        dateGet = moment(jsonData.datetime).format("MM/DD/YYYY");
        // variable that will have the concert information//
        var concertGet = `
 Name of the venue: ${chalk.cyanBright(jsonData.venue.name)}
 Venue location:    ${chalk.cyanBright(jsonData.venue.city)}    
 Date of the Event: ${chalk.cyanBright(dateGet)}
 `;
        console.log(concertGet);
    });
};

//function to find songs in Spotify//
function getSpotify() {
    //if no song is entered, the search will default to "The Sign" by Ace of Base//
    userTerm = userTerm || "The Sign Ace of Base";
    spotify.search({ type: "track", query: userTerm, limit: 10 })
        .then(function (response) {
            var jsonData = response.tracks.items[0];
            // variable that will get the song information//      
            var songGet = `
Artist:    ${chalk.green(jsonData.artists[0].name)}     
Song Name: ${chalk.green(jsonData.name)}
Album:     ${chalk.green(jsonData.album.name)}
Go listen: ${chalk.green(jsonData.preview_url)}
`;
            console.log(songGet);
        })
        .catch(function (err) {
            console.log(err)
        });
};

//function to find movies in OMDB//

function getMovie() {
    //if no movie is entered, the search will default to "Mr Nobody"
    userTerm = userTerm || "Mr Nobody"
    //Axios get call//
    axios.get("http://www.omdbapi.com/?t=" + userTerm + "&y=&plot=short&apikey=trilogy")
    .then(function(response){
        var jsonData = response.data;
        //variable that has all the movie info from OMDB//
        var movieGet = `
Title:                   ${chalk.magenta(jsonData.Title)}
Year:                    ${chalk.magenta(jsonData.Year)}
IMDB Rating:             ${chalk.magenta(jsonData.imdbRating)}
Rotten Tomatoes Rating:  ${chalk.magenta(jsonData.Ratings[1].Value)}
Country of Origin:       ${chalk.magenta(jsonData.Country)}
Language:                ${chalk.magenta(jsonData.Language)}
Plot:                    ${chalk.magenta(jsonData.Plot)}
Actors:                  ${chalk.magenta(jsonData.Actors)}
`;
        console.log(movieGet);
    });

};


//start app function//
start();