// Question 1
db.postings.find().pretty()
db.postings.dropIndex("*")
print ("Indexes")
db.postings.ensureIndex({"comments.flagged" : 1})
db.postings.ensureIndex({"voters" : 1}, {"unique" : 1})
db.postings.getIndexes()
print ("Query with Index")
db.postings.find( { "comments.flagged" : true } ).pretty()
db.postings.find( { "comments.flagged" : true } ).explain()
print ("Update 1")
db.postings.update({ _id : "test"}, { $inc : {votes:1}, $push : {voters:"joe"} } );
db.postings.update({ _id : "test"}, { $inc : {votes:1}, $push : {voters:"joe"} } );
db.postings.find().pretty()
print ("Update 2")
db.postings.update({ _id: "test", voters:{$ne:'joe'} }, { $inc : {votes:1}, $push : {voters:'joe'} } );
db.postings.update({ _id: "test", voters:{$ne:'joe'} }, { $inc : {votes:1}, $push : {voters:'joe'} } );
db.postings.find().pretty()
