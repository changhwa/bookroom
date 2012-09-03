

User = require('../lib/user').User;

exports.login = function(req,res){
	User.userAdd({
		id : req.body.id,
		pw : req.body.pw
	});
	res.writeHead(200, { 'Content-Type' : 'text/html'});
	res.end('<h1> Test </h1>');
}


exports.register = function(req,res){
	
	return User.userAdd({
		id : req.body.id,
		pw : req.body.pw
	}, function(err){
		if(err === 'Success'){
			res.render('index' , { message: 'Register Success..' })
		}else{
			res.render('index' , { message: 'Register Fail..' })
		}
	});

	res.redirect('/');
}
