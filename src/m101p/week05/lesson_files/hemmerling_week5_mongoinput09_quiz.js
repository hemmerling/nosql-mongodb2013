show dbs
use usa	
print ( "Population" );
db.zips.aggregate([
    {$group:
     {
	 "_id": "$city",
	 "postal_codes":{$push:"$_id"}
     }
    }
])
db.zips.aggregate([
    {$group:
     {
	 "_id": "$city",
	 "postal_codes":{$addToSet:"$_id"}
     }
    }
])
