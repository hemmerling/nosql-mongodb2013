show dbs
use sales
db.stuff.drop ()
db.stuff.insert ({ "_id" : ObjectId("50b26f9d80a78af03b5163c8"), "a" : 1, "b" : 1, "c" : 1 })
db.stuff.insert ({ "_id" : ObjectId("50b26fb480a78af03b5163c9"), "a" : 2, "b" : 2, "c" : 1 })
db.stuff.insert ({ "_id" : ObjectId("50b26fbf80a78af03b5163ca"), "a" : 3, "b" : 3, "c" : 1 })
db.stuff.insert ({ "_id" : ObjectId("50b26fcd80a78af03b5163cb"), "a" : 3, "b" : 3, "c" : 2 })
db.stuff.insert ({ "_id" : ObjectId("50b26fd380a78af03b5163cc"), "a" : 3, "b" : 5, "c" : 3 })
db.stuff.find()
db.stuff.aggregate([{$group:{_id:'$c'}}])