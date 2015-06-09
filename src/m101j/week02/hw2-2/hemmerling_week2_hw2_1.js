show dbs
use students
show collections
print ("Number of grades before removal: 800");
db.grades.count()
print ("Remove homework with lowest grade - Find");
var cursor = db.grades.find({"type":"homework"}).sort({"student_id":1, "score":1 })
var i = 0
while (cursor.hasNext()) {
	a = cursor.next() 
	b = cursor.next()
    print (a.student_id+":"+a.score+", "+b.student_id+":"+b.score)
	// db.grades.find({"type":"homework", "student_id": a.student_id, "score": a.score})
	db.grades.remove({"type":"homework", "student_id": a.student_id, "score": a.score})
}
print ("Number of grades after removal: 600");
db.grades.count()
// print ("xxxxxxxxxxxxxxxxx")
// db.grades.find({"type":"homework"})
// print ("xxxxxxxxxxxxxxxxx")
print ("101st best grade after removal: student #164");
db.grades.find().sort({'score':-1}).skip(100).limit(1)
print ("Top five docs");
db.grades.find({},{'student_id':1, 'type':1, 'score':1, '_id':0}).sort({'student_id':1, 'score':1, }).limit(5)
print ("HW2 answer:");
db.grades.aggregate(
	{'$group':{'_id':'$student_id', 'average':{$avg:'$score'}}}, 
	{'$sort':{'average':-1}}, {'$limit':1}
)
