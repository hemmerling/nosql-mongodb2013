show dbs
use usa
db.zips.findOne()
db.zips.find().count()
db.zips.aggregate( [ 
 {$group:{_id:{state:"$state",city:"$city"},
    n:{$sum:1}}} , 
 {$sort:{n:-1}} , 
 {$limit:5} ] 
)
print ( "Quest modified for answer 1" );
db.zips.aggregate( [ 
 {$group:{_id:{city:"$city",state:"$state"},
    n:{$sum:1}}} , 
 {$sort:{n:-1}} , 
 {$limit:5} ] 
)
print ( "Quest modified for answer 2" );
db.zips.aggregate( [ 
 {$group:{_id:{x:"$state",y:"$city"},
    n:{$sum:1}}} , 
 {$sort:{n:-1}} , 
 {$limit:5} ] 
)
print ( "Quest modified for answer 3" );
db.zips.aggregate( [ 
 {$group:{_id:{state:"$state"},
    n:{$sum:1}}} , 
 {$sort:{n:-1}} , 
 {$limit:5} ] 
)