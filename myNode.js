var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/quizdb';

MongoClient.connect(url, function (err, database) {
	if (err) {
		console.log('Unable to connect to mongo server. Error: ' + err);
	} else {
		console.log('Connection good: ' + url);



	}

	database.close();
});