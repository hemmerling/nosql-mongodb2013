show dbs
use usa	
print ( "Population" );
db.zips.aggregate([
    {$group:
     {
	 "_id": "$state",
	 "pop":{$max:"$pop"}
     }
    }
])
])
