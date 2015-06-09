show dbs
use pcat
show collections
db.runCommand ( {"isMaster":1 })
db.runCommand ("isMaster")
db.isMaster()
db.isMaster
db.serverStatus()
print ( "Current operations:" )
// just call this function interactively :-)
db.currentOp()
db.killOp
db.products.findOne()
db.products.ensureIndex({"name": 1})
print ( "Sorting+" )
db.products.find({},{name:1}).sort({name:1})
print ( "Sorting-" )
db.products.find({},{name:1}).sort({name:-1})
db.products.find( { "name" : "AC3 Case Red" }).explain()
db.products.getIndexes()
db.system.indexes.find()
db.products.help()
db.products.stats()
db.system.namespaces.find()
use admin
db.runCommand( { "listDatabases" : 1 } )