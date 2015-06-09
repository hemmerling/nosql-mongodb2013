show dbs
use pcat
show collections
db.test.drop()
t = db.test
t.find()
t.insert({"x" : "hello"})
t.insert({"x" : "hello"})
t.insert({"x" : "hello"})
t.insert({"x" : "hello"})
print ( "Find" )
t.find()
t.insert({"_id": 100, "x" : "hello id"})
t.insert({"_id": 101, "x" : "hello id"})
t.find()
