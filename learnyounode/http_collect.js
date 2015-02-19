var http = require("http");
const BufferList = require("bl");
var list = "";
bl = new BufferList();

http.get(process.argv[2], function(response){
	response.setEncoding("utf8");
	response.on("data", function(data){
		bl.append(data);
	});
	response.on("end", function(end){
		console.log(bl.length);
		console.log(bl.toString());
	});
})