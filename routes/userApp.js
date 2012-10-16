

User = require('../lib/user').User;

exports.login = function(req,res){
	
	return User.login({
		id : req.body.id,
		pw : req.body.pw
	}, function (data, msg){
		console.log('userApp.js');
		console.log('msg');
		console.log('data.id: ' +data.id);
		console.log('data.apikey: ' +data.apiKey);
		if(msg){
			req.session.userId = data.id;  
			req.session.message = 'Login Success';
			req.session.apiKey = data.apiKey;
			res.header('Referrer');
 			res.redirect('/');
 			//res.render('index', {message: 'Login Success'});
		} else{
			req.session.message = 'Login Fail';
			res.header('Referrer');
 			res.redirect('/');
		}
	});
}

exports.logout = function(req, res){

	if(req.session.userId !== 'undefined' || req.session.userId !== '') {
		delete req.session.userId;
		delete req.session.message;
	}

	res.redirect('/');
}

exports.register = function(req,res){
	
	return User.userAdd({
		id : req.body.id,
		pw : req.body.pw,
		key: req.body.key
	}, function(msg){
		if(msg === 'Success'){
			res.render('index' , { message: 'Register Success..' })
		}else{
			res.render('index' , { message: 'Register Fail..' })
		}
	});

	res.redirect('/');
}
