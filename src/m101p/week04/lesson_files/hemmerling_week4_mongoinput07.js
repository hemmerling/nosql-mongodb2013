
use test
db.foo.drop()
for (var j = 0; j < 10000; j++){
    db.foo.insert({'a':j,'b':j, 'c':j});
}

// db.foo.ensureIndex({ "a": 1, "b": 1, "c": 1, "d": 1 })
db.foo.ensureIndex({ "a": 1 })
db.foo.ensureIndex({ "b": 1 })
db.foo.ensureIndex({ "c": 1 })
db.foo.ensureIndex({ "d": 1 })
db.foo.getIndexes()
db.foo.find({"a":100, "b":100, "c":100})
db.foo.find({"a":100, "b":100, "c":100}).explain()
db.foo.find({"a":100, "b":100, "c":100}).hint({$natural : 1})
db.foo.find({"a":100, "b":100, "c":100}).hint({$natural : 1}).explain()
db.foo.find({"a":100, "b":100, "c":100}).hint({"c" : 1})
db.foo.find({"a":100, "b":100, "c":100}).hint({"c" : 1}).explain()
db.foo.find({"a":100, "b":100, "c":100}).hint({"d" : 1})
db.foo.find({"a":100, "b":100, "c":100}).hint({"d" : 1}).explain()
db.foo.ensureIndex({ "e": 1 }, { "sparse":true } )
print ( "Right answer" )
db.foo.find({"a":100, "b":100, "c":100}).hint({"d" : 1})
print ( "Wrong answer" )
db.foo.find({"a":100, "b":100, "c":100}).hint({"e" : 1})
db.foo.find({"a":100, "b":100, "c":100}).hint({"e" : 1}).explain()
