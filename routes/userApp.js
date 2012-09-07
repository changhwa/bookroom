

User = require('../lib/user').User;

exports.login = function(req,res){
	
	return User.login({
		id : req.body.id,
		pw : req.body.pw
	}, function (id, msg){
		if(msg){
			req.session.userId = id.id;  
			res.header('Referrer');
 			res.redirect('/');
 			//res.render('index', {message: 'Login Success'});
		} else{
			//res.render('index', {message: 'Login Fail', user: 'undefined'});
			res.render('index', {message: 'Login Fail'});
		}
	});
}

exports.logout = function(req, res){

	if(req.session.userId !== 'undefined' || req.session.userId !== '') {
		delete req.session.userId;
	}

	res.redirect('/');
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
