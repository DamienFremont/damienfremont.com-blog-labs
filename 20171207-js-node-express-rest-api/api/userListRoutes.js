'use strict';
var express = require('express'),
  userList = require('./userListController');

var api = express.Router();

// DOC
var infos = function (req, res) {
  var json = {
    _links: {
      users: {
        href: "http://localhost:3000/api/users"
      }
    }
  };
  res.send(json);
};
api.get('/', infos);

// API
api.get('/users', userList.list_all_users);
api.post('/users', userList.create_a_user);
api.get('/users/:userId', userList.read_a_user);
api.put('/users/:userId', userList.update_a_user);
api.delete('/users/:userId', userList.delete_a_user);

module.exports = api;
