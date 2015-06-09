show dbs
use usa	
db.zips.findOne()
print ( "Population NJ+CT" );
db.zips.aggregate([
    {$match:{state:{ $in: ["NJ","CT"] }}},
    {$group:{"_id": {"city":"$city","state":"$state"} ,pop:{$sum:"$pop"}}},
    {$match:{pop:{$gt:25000}}},
    {$group:{"_id":1,avg:{$avg:"$pop"}}}
    ])
print ( "Population NY+CA" );
db.zips.aggregate([
    {$match:{state:{ $in: ["NY","CA"] }}},
    {$group:{"_id": {"city":"$city","state":"$state"} ,pop:{$sum:"$pop"}}},
    {$match:{pop:{$gt:25000}}},
    {$group:{"_id":1,avg:{$avg:"$pop"}}}
    ])