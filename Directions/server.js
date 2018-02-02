
var express = require('express');
var app = express();
//vm.runInThisContext(fs.readFileSync(__dirname + "https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=true"))
//on appelle ejs
app.set('view engine', 'ejs');



// on telecharge la page html exemple sur le serveur
app.get('/', function(req, res) {
    res.render('Exemple');
});


//on configure le port sur 8080
app.listen(8080);
console.log('Port 8080 actif');