var Promise = require('bluebird');
var mongoose = require('mongoose');
mongoose.Promise = Promise;
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	username : {
		type : String,
		required : true,
	},
    guest : {
		type : Boolean,
        'default' : false,
	},
	platform :
	{
		type : Number,
		'default' : 5,
		min : 0,
		max : 2
	},
	password : {
		type : String
	},
    email : {
		type : String
	},
    isemailverified : {
		type : Boolean,
        'default' : false,
	},
	ids : [ String ],
	elo : {
		type : Number,
		'default' : 1400,
		min : 0
	},
	fuel : {
		type : Number,
		'default' : 5,
		min : 0,
		max : 5
	},
	srd : {
		type : Number,
		'default' : 0,
		min : 0
	},
	matches : {
		type : Number,
		'default' : 0,
		min : 0
	},
	goals : {
		type : Number,
		'default' : 0,
		min : 0
	},
	wins : {
		type : Number,
		'default' : 0,
		min : 0
	},
	unlockedItems : {
		type: String
	},
	linked : {
		facebook : {
			id : String,
			name : String,
			lastName : String,
			email : String
		},
		google : {
			id : String
		}
	},
	social : {
		friends: [],
		friendRequests : [ String ],
		friendsBlocked : [ String ]
	},
	statistics : String
});

// Validation method to make sure that the size stays under 1 mb
UserSchema.path('statistics').validate(bytes,
		'Uh oh, {PATH} memory size exceeds 1MB.');
function bytes(string) {
	var escaped_string = encodeURI(string);
	if (escaped_string.indexOf("%") != -1) {
		var count = escaped_string.split("%").length - 1;
		count = count == 0 ? 1 : count;
		count = count + (escaped_string.length - (count * 3));
	} else {
		count = escaped_string.length;
	}

	return count < 125000;
}

// Bcrypt middleware on UserSchema
UserSchema.pre('save', function(next) {
    console.log("UserSchema.pre('save', function(next");
    return next();
});



module.exports = mongoose.model('user', UserSchema);