show dbs
use usa	
print ( "Population" );
db.zips.aggregate([
    {$group:
     {
	 "_id": "$state",
	 "average_pop":{$avg:"$pop"}
     }
    }
])
