show dbs
use photoalbum

db.images.findOne()
db.albums.findOne()
db.albums.dropIndex("*")
db.albums.ensureIndex({"images": 1})

function filter(image) {
	if (db.albums.count({'images': image._id}) == 0)
	{
		db.images.remove({'_id': image._id});
	}
};
 
function map() {
	emit('_id', this._id);
}
 
function reduce(key, values) {
	var result = 0;
	if (key === '_id') {
	    for(var i = 0; i < values.length; i++)
	    {
	        result += values[i];
	    }
	}
	return result;
}

print ("Find and MapReduce:");
db.images.find().forEach(filter);
db.images.mapReduce(map, reduce, {out: {inline: 1}});

print ("What are the total number of images with the tag 'sunrises'");
db.zipcodes.aggregate( { $group :
                         { _id : "$state",
                           totalPop : { $sum : "$pop" } } },
                       { $match : {totalPop : { $gte : 10*1000*1000 } } } )
db.albums.aggregate(
{ $unwind : "$images" },
{ $group: {
_id : null,
sum : {$sum : "$images"},
count : {$sum : 1} }
{ $match : {"tags": "sunrises"}}
}
)
