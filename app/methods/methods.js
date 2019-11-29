
var User = require('./../models/user');

var methods = {
       
	createNewUser : function(username) {
        console.log("creating new user...");
		var account = new User();
		account.username = username;
		return account.saveAsync();
	},
  
};

module.exports = methods;