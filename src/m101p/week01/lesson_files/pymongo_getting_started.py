
import pymongo

from pymongo import MongoClient


# connect to database
connection = MongoClient('localhost', 27017)

db = connection.test2

# handle to names collection
names = db.names

item = names.find_one()

print item
print item['name']

