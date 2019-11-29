
var User = require('./../models/user');

var methods = {
       
	createNewUser : function(username) {
		var account = new User();
		account.username = username;
		return account.saveAsync();
	},
  
};

module.exports = methods;