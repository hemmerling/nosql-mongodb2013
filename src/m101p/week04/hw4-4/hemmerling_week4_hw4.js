show dbs
use m101
show collections
db.profile.find({"ns" : "school2.students"}).sort({"millis":-1}).pretty()
