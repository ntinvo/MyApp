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

// Exports User to the app
const User = module.exports = mongoose.model('User', UserSchema);

// Add user to the database
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

// Get the user by id. NOTE: not used yet
module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
}

// Get the user by username. NOTE: not used yet
module.exports.getUserByUsername = function(username, callback) {
  const query = { username: username };
  User.findOne(query, callback);
}

// Get the user by email
module.exports.getUserByEmail = function(email, callback) {
  const query = { email: email };
  User.findOne(query, callback);
}

// Compare the passsword with hashed password
module.exports.comparePasswords = function(password, hash, callback) {
  bcrypt.compare(password, hash, (error, isMatch) => {
    if(error) {
      throw error;
    }
    callback(null, isMatch);
  });
}
