exports.tratarError = function(err, res){
	console.log("Error:" + err);
	res.send(500, "Error :D");
}

exports.test = function(valor){
	console.log(valor)
}