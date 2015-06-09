show dbs
use test
db.fubar.drop()
db.fubar.insert({"a": 5000, "b": 6000, "c": 20})
db.fubar.insert({"a": 12000, "b": 6000, "c": 30})
db.fubar.insert({"a": 5000, "b": 4000, "c": 40})
// Nacheinander auskommentieren, welcher Cursor bei explain() gerade gezeigt wird
//db.fubar.ensureIndex({"a":1, "b":1})
//db.fubar.ensureIndex({"a":1, "c":1})
db.fubar.ensureIndex({"c":1})
//db.fubar.ensureIndex({"a":1, "b":1, "c":-1})
db.fubar.find()
db.fubar.getIndexes()
db.fubar.find({'a':{'$lt':10000}, 'b':{'$gt': 5000}}, {'a':1, 'c':1}).sort({'c':-1})
db.fubar.find({'a':{'$lt':10000}, 'b':{'$gt': 5000}}, {'a':1, 'c':1}).sort({'c':-1}).explain()