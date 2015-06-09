show dbs
use usa
db.zips.findOne()
db.zips.find().count()
db.zips.aggregate([
{ $project : { _id : { $substr : ["$_id",0,1] } } } , 
{ $group : { _id : "$_id", n : {$sum:1} } }
])

db.zips.aggregate([
{ $project : { _id : { $substr : ["$city",0,1] } } } , 
{ $group : { _id : "$city", n : {$sum:1} } }
])
