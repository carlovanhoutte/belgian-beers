const express = require('express');
const app = express();
const port = 3000;

var beersArray = require("./beers.json");


var counter = 0;

app.use(express.static(__dirname));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    var beer = beersArray[counter % beersArray.length] // Roll over at end of array
    var message = `[${counter}] ${beer.name}`;
    console.log(message);

    if(req.header('User-Agent').indexOf('curl') !== -1) {
        res.send(message);
    }
    else {
        res.render('index.ejs', {beer: beer, counter: counter});
    }
    counter++;
});

app.listen(port, () => console.log(`Belgian Beers app running on port ${port}!`));