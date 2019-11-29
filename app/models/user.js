var Promise = require('bluebird');
var mongoose = require('mongoose');
mongoose.Promise = Promise;
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	username : {
		type : String,
		required : true,
	},
	password : {
		type : String
	},
    email : {
		type : String
	}
});

module.exports = mongoose.model('user', UserSchema);