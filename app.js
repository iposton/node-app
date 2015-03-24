var express = require('express');

var app = express();

app.get('/',function(req,res){

	res.render('index.ejs',{title: 'Hello Welcome'});
});

app.get('/about',function(req,res){

	res.render('layout.ejs',{title: 'About Us',body: '<h1>About</h1>'});
});

app.get('/*',function(req,res){

	res.status(404).render('error.ejs',{title: 'error!' });
});
console.log('server started on localhost:3000');
app.listen(3000);