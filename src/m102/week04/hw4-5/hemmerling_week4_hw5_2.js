db.isMaster().ismaster
show dbs
use local
show collections
db.oplog.rs.find()
db.oplog.rs.stats()
print ("hw5, part 1")
db.oplog.rs.find().sort({$natural:1})
print ("hw5, part 2")
db.oplog.rs.find().sort({$natural:1}).limit(1)
print ("hw5, part 3")
db.oplog.rs.find().sort({$natural:1}).limit(1).next()
print ("hw5, part 4")
db.oplog.rs.find().sort({$natural:1}).limit(1).next().o
print ("hw5, answer")
db.oplog.rs.find().sort({$natural:1}).limit(1).next().o.msg[0]
print ("hw5, answer ??")
db.oplog.rs.find().sort({$natural:-1}).limit(1).next().o.msg[0]
