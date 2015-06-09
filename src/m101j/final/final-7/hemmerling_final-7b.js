show dbs
use photoalbum
show collections
db.images.findOne()
db.images.dropIndex("*")
db.images.ensureIndex({"tags": 1})
db.images.getIndexes()
print ("What are the total number of images with the tag 'sunrises'");

/*
db.images.aggregate(
{ $group: { count : { $sum : "tags" } }
{ $match : {"tags": "sunrises"}
}
)
*/

db.orders.aggregate( [
   { $group: { _id: { "tags": "sunrises" } } },
   { $group: { _id: null, count: { $sum: 1 } } }
] )