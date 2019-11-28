
var User = require('./../models/user');

var methods = {
       
	createNewUser : function(username, id, platform) {
		var account = new User();
		account.username = username;
		return account.saveAsync();
	},
  
};

module.exports = methods;