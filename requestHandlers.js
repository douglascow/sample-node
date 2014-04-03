function start(response) {
	console.log("Request handler 'start' was called");
	
	var body = '<html>'+
	'<head>'+
	'<meta http-equiv="Content-Type" content="text/html; '+
	'charset=UTF-8" />'+
	'</head>'+
	'<body>'+
	'<div class = "large-6 columns">'+
	'<div class="panel">'+
	'<p id="firstStop">We have a simple selection of hosting packages for you to choose from, these will work fanastically any company. With ultra fast mySQL database connections, content managemanet systems really fly. Add to this 24/7 customer support and 99.9% uptime and you have got a great hosting package.</p>'+
	'</div>'+
	'</div>'+
	'<form action="/upload" method="post">'+
	'<textarea name="text" rows="20" cols="60"></textarea>'+
	'<input type="submit" value="Submit text" />'+
	'</form>'+
	'</body>'+
	'</html>';
	
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();

}

function upload(response) {
	console.log("Request handler 'upload' was called");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello Upload");
	response.end();
}

exports.start = start;
exports.upload = upload;