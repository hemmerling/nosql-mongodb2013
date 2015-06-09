show dbs
use enron
db.messages.ensureIndex({"headers.From_1":1})
db.messages.getIndexes()
db.messages.find({'headers.Date':{'$gt': new Date(2001,3,1)}},{'headers.From':1, _id:0}).sort({'headers.From':1}).explain()