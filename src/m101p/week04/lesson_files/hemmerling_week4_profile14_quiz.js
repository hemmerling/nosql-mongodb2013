db.setProfilingLevel(1,1)
db.getProfilingLevel()
db.getProfilingStatus()
show dbs
use pcat
show collections
db.products.find()
print ("Profile Find 1")
db.system.profile.find().pretty()
print ("Profile Find 2")
db.system.profile.find({millis:{$gt:1000}}).sort({ts:-1})
print ("Profile Find 3")
db.system.profile.find({millis:{$gt:1}}).sort({ts:-1})
