# **LIRI-Bot**

UNC Charlotte Coding Bootcamp - Homework # 10

**Description:**

A Node based application that takes user input from a selection of commands and returns the information requested.

Technologies used: 

Node.JS

Node Spotify API: <https://www.npmjs.com/package/node-spotify-api>

Axios: <https://www.npmjs.com/package/axios>

OMDb API: <http://www.omdbapi.com/>

BANDINSTOWN API: <http://www.artists.bandsintown.com/bandsintown-api>

Moment: <https://www.npmjs.com/package/moment>

Dotenv: <https://www.npmjs.com/package/dotenv>

Chalk for beautification purposes: <https://www.npmjs.com/package/chalk>

 

**Demonstration:** 

**Concert-this** command – The user inputs a band or artist of their choice, and the LIRI bot will find the best match and display the venue and location (using Axios, and bandsintown api), as well as the date of the event (using moment):

![](liri1.gif)

**Spotify-this-song** command – The user inputs a name of a song of their choice, the LIRI bot will find the best match and display the name of the artist, name of song, album, and a link to listen to a sample of the song (node spotify api):

![](liri2.gif)

**Movie-this** command – the user inputs a name of a movie and the LIRI Bot will provide information from the OMDB api (using Axios):

![](liri3.gif)

**do-what-it-says** command – the user selects this command and the LIRI Bot will look at the random.txt file and use whatever command is written in the text file:

![](liri4.gif)

If the user inputs another command other than the ones provided, the LIRI bot will notify the user that it cannot perform the command given: 

![](liri5.gif)