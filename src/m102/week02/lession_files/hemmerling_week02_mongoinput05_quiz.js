show dbs
use pcat
show collections
db.cars.drop()
t = db.cars
t.find()
t.insert({ "_id" : 100, "name" : "GTO", "year" : 1969, "color" : "red" })
db.cars.update({_id:100},{$inc:{available:1}})
t.find()
db.cars.update({},{$inc:{available:1,year:1970}})
t.find()
db.cars.update({_id:100},{$set:{available:1}})
t.find()
