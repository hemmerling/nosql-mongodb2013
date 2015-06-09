show dbs
use pcat
show collections
t = db.users
t.drop()
t.find()
t.insert({
 _id : "Jane",
 likes : [ "tennis", "golf" ],
 registered : false,
 addr : {
   city : "Lyon",
   country : "France" 
 }
})
t.find()
//t.update({ "_id" : "Jane"}, { $addToSet:{ "likes" : "football" }}, true)
db.users.update({ "_id" : "Jane"}, { $addToSet:{ "likes" : "football" }}, true)
db.getLastErrorObj()
print ( "Item added" )
t.find()
