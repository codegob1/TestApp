var Promise		= require('bluebird');
var mongoose    = require('mongoose');
var redis 		= require('redis');
Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);
Promise.promisifyAll(redis);
var client 		= redis.createClient( process.env.REDIS_URL );
//CONNECTION EVENTS
//When successfully connected
mongoose.connection.on('connected', function () {  
console.log('Mongoose default connection open to ' + process.env.MONGODB_URI);
}); 

//If the connection throws an error
mongoose.connection.on('error',function (err) {  
console.log('Mongoose default connection error: ' + err);
}); 

//When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
console.log('Mongoose default connection disconnected'); 
});

//If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function() {  
	mongoose.connection.close(function () { 
	 console.log('Mongoose default connection disconnected through app termination'); 
	 process.exit(0); 
	}); 
}); 

//REDIS
client.on('connect', function() {
    console.log('connected to REDIS');
});

module.exports.mongo = mongoose.connect( process.env.MONGODB_URI );
module.exports.redis = client; 