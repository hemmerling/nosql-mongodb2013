import pymongo
import sys

# establish a connection to the database
connection = pymongo.Connection("mongodb://localhost", safe=True)

# get a handle to the school database
db=connection.question7
images = db.images
albums = db.albums

def find():
        query = {}
        selector = { '_id': 1 }

        try:
                cursor = images.find(query, selector)
        except:
                print "Unexpected error:", sys.exc_info()[0]

        for doc in cursor:
                exists = 0
                idImmagine = doc['_id']
                exists = albums.find({'images': idImmagine}).count()
#for alb in cursorAlbums:
                if exists == 0:
print idImmagine
print "non esiste"
images.remove({"_id": idImmagine})
                else:
print idImmagine
print "esiste"
                        continue

find()
