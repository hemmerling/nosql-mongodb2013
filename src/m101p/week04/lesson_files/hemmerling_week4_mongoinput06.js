
use test
db.foo.drop()
for (var j = 0; j < 10000; j++){
    db.foo.insert({'a':j,'b':j, 'c':j});
}

db.foo.ensureIndex({ "a": 1, "b": 1, "c":1 })
db.foo.find({"c":1})
db.foo.find({"c":1}).explain()
db.foo.find({"a":500})
db.foo.find({"a":500}).explain()
db.foo.find({"a":500}, {"a" : 1, "b" : 1, "_id" : 0} )
db.foo.find({"a":500}, {"a" : 1, "b" : 1, "_id" : 0} ).explain()
db.foo.find({$and : [ {"c":{$gt:250}}, {"c":{$lte:500}}]}).sort({"a":1})
db.foo.find({$and : [ {"c":{$gt:250}}, {"c":{$lte:500}}]}).sort({"a":1}).explain()
db.foo.dropIndex({"a":1, "b":1, "c":1})
db.foo.ensureIndex({ "a": 1, "b": 1 })
db.foo.find({$and : [ {"c":{$gt:250}}, {"c":{$lte:500}}]}).sort({"a":1})
db.foo.find({$and : [ {"c":{$gt:250}}, {"c":{$lte:500}}]}).sort({"a":1}).explain()
db.foo.totalIndexSize()