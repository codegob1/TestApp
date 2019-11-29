
var User = require('./../models/user');

var methods = {
       
	createNewUser : function(username) {
        console.log("creating new user...");
		var newUser = new User();
		newUser.username = username;
        newUser.saveAsync()
        .then(function(savedUser) {
            console.log(" saving..." + JSON.stringify(savedUser));
            return savedUser;
        })
        .catch(function(err) {
            console.log("There was an error saving the new user");
        })
	},
  
};

module.exports = methods;