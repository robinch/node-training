// libs
var http = require("http");
var fs = require("fs");
//

var port = process.argv[2];
var filePath = process.argv[3];

var server = http.createServer(function(request, response){
	fs.createReadStream(filePath).pipe(response);
	//give the file stream
});
server.listen(port)