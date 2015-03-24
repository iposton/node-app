var express = require('express');

var app = express();

app.get('/about',function(req,res){


	res.send('<h1>about us</h1>');
});

app.get('/about/:title',function(req,res){


	res.send('<h1>'+req.params.title+'</h1>');
});

app.get('/*',function(req,res){


	res.send('<h1>Welcome to the homepage</h1>');
});
console.log('Server Started on localhost:3000')
app.listen(3000);
