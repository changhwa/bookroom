var file = require('./file');
var rest = require("restler");


var Api = function (){

	console.log('???????????');

	var api = function(options){

		console.log('api start?? ');

		rest.get(
			options.host+options.path+'key='+options.key+'&query='+options.content+'&display='+options.display+'&start='options.startPage+'&target='+options.target,
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