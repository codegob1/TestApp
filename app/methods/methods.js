
var User = require('./../models/user');

var methods = {
       
	createNewUser : function(username) {
        console.log("creating new user...");
		var newUser = new User();
		newUser.username = username;
        newUser.save();
        console.log(" saving..." + JSON.stringify(newUser));
        return newUser;
	},
  
};

module.exports = methods;