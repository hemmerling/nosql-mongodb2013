db
use world
db
show collections
db.people.drop()
db.people.insert({ "name" : "Andrew", "title": "Jester" })
db.people.insert({ "name" : "Dwight", "title": "CEO" })
db.people.insert({ "name" : "John" })
db.people.find()
db.people.ensureIndex({title:1}, {sparse:1})
db.system.indexes.find()
db.products.getIndexes()
print ( "Find null" )
db.people.find({title:null})
