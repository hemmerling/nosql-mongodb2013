show dbs
use test
show collections
db.temperature.drop()
db.temperature.insert({x:3,y:4})
db.temperature.find()
db.getLastError()
db.getLastErrorObj()
