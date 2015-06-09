use business
db.places.drop()
db.places.insert({"name": "Ruby", "type": "Barber", "location":[48,74]})
db.places.insert({"name": "ACE Hardware", "type": "Hardware", "location":[40.232,-70.343]})
db.places.insert({"name": "Tickle Candy", "type": "Food", "location":[41.42,-75.123]})

db.places.ensureIndex( { "location" : "2d", "type" : 1 })
// db.system.indexes.find()
db.places.getIndexes()
db.places.find({location: {$near:[74,140]}}).limit(3) 
