var express = require('express');
var jade = require('jade');

var portnumber = 3000;

//Init express
var app = express();
console.log('Express Initialized');

//Set views folder
app.set('views',__dirname + '/views');
//Init Jade
app.set('view engine','jade');
console.log('Jade Initialized');

//Set static folder
app.use(express.static(__dirname + '/public'));

//Render index page
app.get('/',function(req,res){

	res.render('index', { title: 'Welcome' })
})

//App Listen
app.listen(portnumber);
console.log('Connected to port '+portnumber);