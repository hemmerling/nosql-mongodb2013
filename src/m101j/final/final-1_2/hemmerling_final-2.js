show dbs
use enron
db.messages.findOne()
db.messages.aggregate([
	{$project: {
		from: "$headers.From",
		to: "$headers.To"
	}},
	{$unwind: "$to"},
	{$project: {
		pair: {
			from: "$from",
			to: "$to"
		},
		count: {$add: [1]}
	}},
	{$group: {
		_id: "$pair",
		count: {$sum: 1}
	}},
	{$sort: {
		count: -1
	}},
	{$limit: 2},
	{$skip: 1}
])
