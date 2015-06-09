show dbs
use enron
print ("findOne")
db.messages.findOne()
db.messages.dropIndex("*")
print ("ensureIndex")
db.messages.ensureIndex({"headers.From":1})
print ("getIndexes")
db.messages.getIndexes("*")
print ("find with sort")
db.messages.find({'headers.Date':{'$gt': new Date(2001,3,1)}},{'headers.From':1, _id:0}).sort({'headers.From':1}).explain()
print ("find without sort")
db.messages.find({'headers.Date':{'$gt': new Date(2001,3,1)}},{'headers.From':1, _id:0}).explain()