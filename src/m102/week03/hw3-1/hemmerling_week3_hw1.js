show dbs
use usa
db.zips.findOne()
db.zips.find().count()
db.zips.aggregate( [ 
 {$group:{_id:{state:"$state"},
    n:{$sum:1}}} , 
 {$sort:{n:-1}} , 
 {$limit:4} ] 
)