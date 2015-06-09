db
use test
db
show collections
db.people.drop()
db.people.dropIndex({"*"})
db.people.insert({ "name" : "Andrew", "title": "Jester" })
db.people.insert({ "name" : "Dwight", "title": "CEO" })
db.people.insert({ "name" : "John" })
db.people.find()
db.people.ensureIndex({"title":1}, {"sparse":1})
db.people.getIndexes()
print ( "Find1" )
db.people.find().sort({'title':1}).hint({$natural:1})
print ( "Find2" )
db.people.find().sort({'title':1})
print ( "Find3" )
db.people.find({name:{$ne:"Kevin"}}).sort({'title':1})
print ( "Find4" )
db.people.find({'title':{$ne:null}}).hint({'title':1}) 
