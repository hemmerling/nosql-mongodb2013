show dbs
use pcat
show collections
t = db.users
t.drop()
t.find()
t.insert({
 _id : ObjectId("50897dbb9b96971d287202a9"),
 name : "Jane",
 likes : [ "tennis", "golf" ],
 registered : false,
 addr : {
   city : "Lyon",
   country : "France" 
 }
})
t.find()
// t.remove({ "addr.city" : "Lyon", "registered" : false })
db.users.remove({ "addr.city" : "Lyon", "registered" : false })
db.getLastErrorObj()
print ( "Item removed" )
t.find()
