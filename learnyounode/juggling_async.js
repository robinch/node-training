var http = require("http");
var urls = process.argv.slice(2);
var list = [];
var calls_done = 0;
for(var i = 0 ; i < urls.length; i++){
	list[i] = "";
	(function(index){
		http.get(urls[index], function(response){
			response.setEncoding("utf8");
			response.on("data", function(data){
				list[index] += data;
			});
			response.on("end", function(end){
				calls_done++;
				printContent();
			});
		});
	})(i);
}

function printContent(){
	if(calls_done == urls.length){
		list.forEach(function(content){
			console.log(content);
		});
	}
}
