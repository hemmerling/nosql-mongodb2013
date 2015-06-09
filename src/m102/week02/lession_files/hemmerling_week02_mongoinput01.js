show dbs
use pcat
show collections
db.products.findOne()
// db.products.insert( { "name" : "Bluetooth Headset 509", "type" : [ "accessory", "headset" ], "price" : 30 } )
// db.getLastError()
// db.getLastErrorObj()
db.products.insert( { "_id" : "ac4", "name" : "AC4 Phone", "brand" : "ACME", "type" : "phone", "price" : 250, "warranty_years" : 1, "available" : true } )
x = db.getLastError()
print ( "Last error = " + x )
db.getLastErrorObj()
db.products.count()
db.products.find({},{"id":1})
db.products.getIndexes()
