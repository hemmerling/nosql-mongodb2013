 show dbs
 use q7
 show collections
 db.albums.findOne()
 db.albums.findOne({"_id": 1})
 db.albums.findOne({"_id": 2})
 print("Number of images")
 print ("Number of Images")
 db.images.find().count()
 print ("Number of kitten Images")
 rem question answer: 20278 images after killing of orphans
 db.images.find({"tags": "kittens" }).count()
 db.images.findOne()
 db.albums.ensureIndex({"images":1})
 db.images.ensureIndex({"tags":1})
 db.albums.getIndexes()
 db.images.getIndexes()
 