'use strict';

// DUMMY DATA / MOCK
var userData = {
  "total": 3,
  "users": [
    {
      "id": "1",
      "username": "user1",
      "role": "ADMIN",
      "status": "ACTIVE"
    },
    {
      "id": "2",
      "username": "user2",
      "role": "USER",
      "status": "ACTIVE"
    },
    {
      "id": "3",
      "username": "user3",
      "role": "USER",
      "status": "DISABLED"
    }
  ]
};

// READ ALL
exports.find = function (req, callback) {
  var error = null;
  var response = userData;
  callback(error, response);
};

// READ (ONE)
exports.findById = function (userId, callback) {
  var error = null;
  var response = null;
  var actualUser = userData.users.find(x => x.id === userId);
  if (!actualUser)
    error = { "message": "user not found" };
  else
    response = actualUser;
  callback(error, response);
};

// DELETE
exports.remove = function (userId, callback) {
  var error = null;
  var actualUser = userData.users.find(x => x.id === userId);
  if (!actualUser) {
    error = { "message": "user not found" };
  } else {
    var response = actualUser;
    var i = userData.users.indexOf(actualUser);
    userData.users.splice(i, 1);
    userData.total = userData.users.length;
  };
  callback(error, response);
};

// CREATE OR UPDATE
exports.save = function (user, callback) {
  var error = null;
  var response;
  var userId = user.id;
  if (!userId) {
    var newUser = user;
    var generatedId = Math.floor(Math.random() * 6) + 1;
    newUser.id = generatedId;
    userData.users.push(newUser);
    userData.total = userData.users.length;
    response = newUser;
  } else {
    var actualUser = userData.users.find(x => x.id === userId);
    if (!actualUser)
      error = { "message": "user not found" };
    else {
      actualUser.username = user.username;
      actualUser.role = user.role;
      actualUser.status = user.status;
      response = actualUser;
    }
  }
  callback(error, response);
};