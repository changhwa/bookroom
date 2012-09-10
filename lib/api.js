var file = require('./file');
var rest = require("restler");


var Api = function (){

	console.log('???????????');

	var api = function(options){

		console.log('api start?? ');

		rest.get(
			'http://openapi.naver.com/search?key=44055c754ce71545f4f4439db5111cdd&query=%EC%82%BC%EA%B5%AD%EC%A7%80&display=10&start=1&target=book',
			{parser : rest.parsers.xml}
		).on('complete', function(data){
			for(var i in data.rss.channel){
				for(var j in data.rss.channel[i].item ){
					console.log(data.rss.channel[i].item[j].title);
				}
			}
		});
	}

	return {
		api: api
	}
}

exports.Api = new Api();