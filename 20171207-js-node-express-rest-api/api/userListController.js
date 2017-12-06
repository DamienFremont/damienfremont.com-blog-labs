'use strict';
var Users = require('./userListModel');

// READ ALL
exports.list_all_users = function (req, res) {
  Users.find({}, function (err, user) {
    if (err)
      res.status(500).send(err);
    res.json(user);
  });
};

// CREATE
exports.create_a_user = function (req, res) {
  Users.save(req.body, function (err, user) {
    if (err)
      res.status(400).send(err);
    res.json(user);
  });
};

// READ (ONE)
exports.read_a_user = function (req, res) {
  Users.findById(req.params.userId, function (err, user) {
    if (err)
      res.status(400).send(err);
    res.json(user);
  });
};

// UPDATE
exports.update_a_user = function (req, res) {
  Users.save(req.body, function (err, user) {
    if (err)
      res.status(400).send(err);
    res.json(user);
  });
};

// DELETE
exports.delete_a_user = function (req, res) {
  Users.remove(req.params.userId, function (err, user) {
    if (err)
      res.status(400).send(err);
    res.json({ message: 'User successfully deleted' });
  });
};