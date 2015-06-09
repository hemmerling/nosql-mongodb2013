show dbs
use pcat
show collections
db.test.drop()
t = db.test
t.insert({"x" : "hello"})
t.insert({"x" : "hello"})
t.insert({"x" : "hello"})
t.insert({"x" : "hello"})
t.insert({"_id": 100, "x" : "hallo id"})
t.insert({"_id": 101, "x" : "hallo id"})
t.find()
t.find({ "_id": 100 })
t.find({ "_id": 100 }).count()
t.remove({ "_id": 100 })
db.getLastErrorObj()
print ( "Item removed" )
t.find()
t.find({ "x" : /ello/ })
t.remove({ "x" : /ello/ })
db.getLastErrorObj()
print ( "Item removed" )
t.find()
