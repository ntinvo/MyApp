const mongoose = require('mongoose');
const dbconfig = require('../config');
const bcrypt = require('bcryptjs');

// User schema
const UserSchema = mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String },
  email: { type: String, required: true },
  username: { type: String, require: true },
  password: { type: String, require: true }
});

// Exports
const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback) {
  const query = { username: username };
  User.findOne(query, callback);
}

module.exports.addUser = function(user, callback) {
  bcrypt.genSalt(10, (error, salt) => {
    bcrypt.hash(user.password, salt, (error, hash) => {
      if(!error) {
        user.password = hash;
        user.save(callback);
      } else {
        throw error;
      }


    });
  });
}
