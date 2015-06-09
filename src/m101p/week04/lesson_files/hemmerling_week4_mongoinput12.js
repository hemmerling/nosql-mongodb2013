use business
db.stores.drop()
db.stores.insert({"name": "Ruby", "type": "Barber", "location":[48,74]})
db.stores.insert({"name": "ACE Hardware", "type": "Hardware", "location":[40.232,-70.343]})
db.stores.insert({"name": "Tickle Candy", "type": "Food", "location":[41.42,-75.123]})

db.stores.ensureIndex( { "location" : "2d", "type" : 1 })
// db.system.indexes.find()
db.stores.getIndexes()
db.stores.find({location: {$near:[50,50]}})
db.runCommand({"geoNear" : "stores", near : [50,50], "spherical" : "true", "maxDistance" : 1 })
db.runCommand({"geoNear" : "stores", near : [50,50], "spherical" : "true", "maxDistance" : 3 })