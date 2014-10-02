module.exports = function Proyectos(mongoDB) {
	var MongoClient = require('mongoDB');
	var colName = "proyectos";	

	function connect(cb){
		MongoClient.connect(mongoDB, function(err, db){
			if (err) cb(err, null);
			console.log("Conectado a: " + mongoDB);
			var collection = db.collection(colName);
			cb(null, collection);
		}
	}
}
