use test2
db
// fruits = { "name" : "apple", "color" : "red", "shape" : "round" }
// db.fruit.insert( fruits )
db.fruit.insert( { "name" : "apple", "color" : "red", "shape" : "round" } )
show dbs
show collections
db.fruit.find()
db.fruit.findOne()
