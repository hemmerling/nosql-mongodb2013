show dbs
use blog
show collections
db.posts.dropIndex( "*")
// "Home page is super fast. Nice job"
db.posts.ensureIndex( { "date" : -1 } )

// Blog retrieval by permalink is super fast. Nice job.
db.posts.ensureIndex( { "permalink" : 1 } )

// Blog retrieval by tag is super fast. Nice job.
db.posts.ensureIndex( { "tags": 1, "date" : -1 } )

db.system.indexes.find()
print ( "Show indexes of collection 'post'" )
db.posts.getIndexes()