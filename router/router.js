var express = require("express");
var router = express.Router();
var utils = require("../utils/util");
var MongoClient = require("mongodb").MongoClient;
var mongoDB = "mongodb://localhost:27017/test";
var Proyectos = require("model/proyectos");
var proyectos = new Proyectos(mongoDB);

router.route('/api/proyectos')
	.get(function (req, res){

		MongoClient.connect(mongoDB, function(err, db){
			if (err) utils.tratarError(err, res);
			var collection = db.collection('cosas');
			collection.find().toArray(function (err,docs){
				if (err) utils.tratarError(err, res);
				res.json(docs);
				
			});

		});
	})
	.post(function (req, res){
		var doc = req.body;
		MongoClient.connect(mongoDB, function(err, db){
			if (err) utils.tratarError(err, res);
			var collection = db.collection('cosas');
	

			collection.insert(doc, function(err, result){
				if (err) utils.tratarError(err, res);
				res.status(200);
			});
		});
	});

module.exports.router = router;
