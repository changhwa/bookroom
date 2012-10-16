
var file = require('./file');
var Hash = require('jshashes');
var MD5 = new Hash.MD5();

var User = function(){

	var userAdd = function(user, callback){

		if(file.folderExists('./db/'+user.id+"/")){
			console.log('Folder Exists');
			callback('Fail');
		}
		else{
			
			dbCreate({
				id : user.id,
				pw : _encodePasswordMd5(user.pw),
				key : user.key
			});
			callback('Success');
		}
	}

	var login = function(user, callback){
		console.log('user.js :: var login');
		
		var data = _loginFlag(user);
		console.log('data.key:'+ data.key);
		if(data != ""){
			console.log('Login Success???');
			callback({
				id: data.id,
				apiKey: data.key
			}, true);
		} else{
			console.log('Login Fail?????????????');
			callback({
				id: null
			}, false);
		}
	}



	var _loginFlag = function (user){
		if(file.folderExists('./db/'+user.id+"/")){
			var data = file.readFileSync('/db/'+user.id+'/'+user.id+".json");
			var dataJson = JSON.parse(data);
			console.log('id: '+dataJson.id);
			console.log('pw: '+dataJson.pw);
			console.log('id2:'+user.id);
			console.log('pw2:'+_encodePasswordMd5(user.pw));
			if(dataJson.id === user.id &&  dataJson.pw   === _encodePasswordMd5(user.pw)){
				console.log('true?');
				return dataJson;
			} else{
				console.log('false');
				return "";
			}
		} else {
			console.log('if end');
			return "";
		}

	}


	var dbCreate = function(user){
		var dbLoc = "/db/"+user.id;	
		file.mkdirSync(dbLoc);	
		file.makeFileWriteSync('/db/'+user.id+'/'+user.id+".json",JSON.stringify(user));
	}


	var _encodePasswordMd5 = function(pw){
		return MD5.hex(pw);
	}	


	return {
		userAdd: userAdd,
		login: login
	}
}

exports.User = new User();