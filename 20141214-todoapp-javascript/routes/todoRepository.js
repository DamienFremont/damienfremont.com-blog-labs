
var datas = [ {
	title : "task 1",
	completed : false
}, {
	title : "task 2",
	completed : false
} ];

exports.findAll = function() {
	return datas;
};
exports.updateAll = function(newDatas) {
	datas = newDatas;
};
