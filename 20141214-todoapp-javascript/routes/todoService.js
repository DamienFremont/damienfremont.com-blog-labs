var repository = require('./todoRepository');

exports.list = function(req, res) {
	res.send(repository.findAll());
};

exports.save = function(req, res) {
	console.log(req.body);
	res.send(repository.updateAll(req.body));
};
