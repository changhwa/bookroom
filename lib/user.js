
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
		console.log('user.key:'+user.key);
		if(_loginFlag(user)){
			callback({
				id: user.id,
				apiKey: user.key
			}, true);
		} else{
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
				return true;
			} else{
				console.log('false');
				return false;
			}
		} else {
			console.log('if end');
			return false;
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