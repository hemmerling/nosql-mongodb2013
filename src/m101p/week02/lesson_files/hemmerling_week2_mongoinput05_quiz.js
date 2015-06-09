use test3
db
db.users.insert( { "username" : "dwight", "email" : "dwight@dwight.com" } )
db.users.insert( { "username" : "Rolf", "email" : "rolf@gmx.net" } )
db.users.insert( { "username" : "Horst", "email" : "horst@gmx.net" } )
// show dbs
// show collections
db.users.findOne({ "username" : "dwight" }, { "email" : true, "_id" : false})

