show dbs
use test
db.q6.drop()
db.q6.insert({
	"_id" : ObjectId("50c598f582094fb5f92efb96"),
	"first_name" : "John",
	"last_name" : "Doe",
	"date_of_admission" : ISODate("2010-02-21T05:00:00Z"),
	"residence_hall" : "Fairweather",
	"has_car" : true,
	"student_id" : "2348023902",
	"current_classes" : [
		"His343",
		"Math234",
		"Phy123",
		"Art232"
	]
})
// Setting an index slows down writing!
db.q6.ensureIndex({"first name":1, "last_name":1})
db.q6.insert({ "first name": "Rolf", "last_name": "Hemmerling", "student_id": "1234567890" })
 