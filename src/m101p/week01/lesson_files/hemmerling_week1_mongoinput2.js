show dbs
show collections
db
use test2
db
db.names.insert({name:"Rolf"})
db.names.insert({name:"Andreas"})

db.names.find()
db.names.findOne()
var j1 = db.names.findOne()
j1.name = "Horst"
j1
db.names.save(j1)
var j2 = db.names.findOne()
j2
db.names.find()
