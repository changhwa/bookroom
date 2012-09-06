

User = require('../lib/user').User;

exports.login = function(req,res){
	
	return User.login({
		id : req.body.id,
		pw : req.body.pw
	}, function (id, msg){
		if(msg){
			req.session.regenerate(function(err){
				req.session.userId = id;  
				console.log(req.session.userId);
 			});
 			res.render('index', {message: 'Login Success'});
		} else{
			res.render('index', {message: 'Login Fail'});
		}
	});
}


exports.register = function(req,res){
	
	return User.userAdd({
		id : req.body.id,
		pw : req.body.pw
	}, function(msg){
		if(msg === 'Success'){
			res.render('index' , { message: 'Register Success..' })
		}else{
			res.render('index' , { message: 'Register Fail..' })
		}
	});

	res.redirect('/');
}
