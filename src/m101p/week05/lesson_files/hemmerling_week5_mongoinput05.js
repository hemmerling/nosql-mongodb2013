show dbs
use sales
db.foo.drop ()
db.foo.insert ({ "_id" : {"name": "andrew", "class": "m101"}, "hometown" : "ny" })
// duplicate _id is not accepted
db.foo.insert ({ "_id" : {"name": "andrew", "class": "m101"}, "hometown" : "ny" })
db.foo.find()
