//Homepage
exports.index = function(req,res){
	res.render('index', {title: 'Welcome!'});
};

//User List
exports.userlist = function(db){
	return function(req,res){
		var collection = db.get('usercollection');
		collection.find({},{},function(e,docs){
			res.render('userlist',{
				"userlist" : docs,
				title : "User List"
			});
		});
	};
};
//Add user Form
exports.adduser = function(db) {

	return function(req,res){
		//Get Input Submissions
		var first_name = req.body.first_name;
		var last_name = req.body.last_name;
		var user_name = req.body.user_name;
		var email = req.body.email;
		var password = req.body.password;

		//Set Collection
		var collection = db.get('usercollection');

		//Submit to the DB
		collection.insert({
			"first_name" : first_name,
			"last_name" : last_name,
			"user_name" : user_name,
			"email" : email,
			"password" : password
		},function(err,doc){
			if(err){
				res.send('There was a problem');
			} else {

				res.location('userlist');
				res.redirect('userlist');
			}
			
		});
	}
}