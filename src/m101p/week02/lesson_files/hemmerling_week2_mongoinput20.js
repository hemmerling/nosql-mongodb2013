// Recall the schema of the scores collection:
// 
// {
// 	"_id" : ObjectId("50844162cb4cf4564b4694f8"),
// 	"student" : 0,
// 	"type" : "exam",
// 	"score" : 75
// }
use test6
db
db.scores.insert( { "student" : "Rolf", "type" : "exam", "score" : 75} )
db.scores.insert( { "student" : "Andreas", "type" : "exam", "score" : 62} )
db.scores.insert( { "student" : "Horst", "type" : "exam", "score" : 59} )
db.scores.insert( { "student" : "Tom", "type" : "exam", "score" : 58} )
print("Vorher");
db.scores.find().pretty()
db.scores.remove( { "score": {$lt: 60 } } )
print("Nachher");
db.scores.find().pretty()
