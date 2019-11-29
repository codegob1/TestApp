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

// Bcrypt middleware on UserSchema
UserSchema.pre('save', function(next) {
    console.log("UserSchema.pre('save', function(next)");
    return next();
});



module.exports = mongoose.model('user', UserSchema);