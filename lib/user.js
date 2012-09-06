
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
				pw : _encodePasswordMd5(user.pw)
			});
			callback('Success');
		}
	}

	var login = function(user, callback){
		if(_loginFlag(user)){
			callback({
				id: user.id
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
			if(dataJson.id === user.id && _encodePasswordMd5(dataJson.pw ) ===  _encodePasswordMd5(user.pw)){
				return true;
			} else{
				return false;
			}
		} else {
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
		userAdd: userAdd
	}
}

exports.User = new User();