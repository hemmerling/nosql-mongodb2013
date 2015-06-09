use test1
db
doc = { "name" : "Rolf", "age" : 51, "profession" : "engineer" }
db.people.insert( doc )
show dbs
show collections
db.people.find()
db.people.findOne()
