
var datas = [ {
	title : "task 1 from backend",
	completed : false
}, {
	title : "task 2 from backend",
	completed : false
} ];

exports.findAll = function() {
	return datas;
};
exports.updateAll = function(newDatas) {
	datas = newDatas;
};
