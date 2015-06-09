db
use shop
db
show collections
db.products.drop()
db.products.insert({ "item" : "polo shirt", "size": "medium" })
db.products.insert({ "item" : "jeans", "size": "32x32" })
db.products.insert({ "item" : "DVI-to-VGA cable" })
db.products.insert({ "item" : "iphone cradle" })
db.products.find()
//print ( "Unique fails" )
//db.products.ensureIndex( { "size" : 1 }, { "unique" : true } )
print ( "Sparse" )
db.products.ensureIndex( { "size" : 1 }, { "unique" : true, "sparse" : true } )
print ( "Find all products" )
db.products.find()
print ( "Find all products, sort it by size" )
db.products.find().sort({"size":1})
db.system.indexes.find()
db.products.getIndexes()
print ( "DropIndex" )
db.products.dropIndex({"size":1})
print ( "Find all products, sort it by size" )
db.products.find().sort({"size":1})
