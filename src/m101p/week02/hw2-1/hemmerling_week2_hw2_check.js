db
use students
db
show collections
db.grades.count()
print("Find 1:");
db.grades.find().sort({'score':-1}).skip(100).limit(1)
// { "_id" : ObjectId("50906d7fa3c412bb040eb709"), 
//  "student_id" : 100, 
//  "type" : "homework", 
//  "score" : 88.50425479139126 }

print("Find 2:");
db.grades.find({},{'student_id':1, 'type':1, 'score':1, '_id':0}).sort({'student_id':1, 'score':1, }).limit(5)

print("Aggregate:");
db.grades.aggregate({'$group':{'_id':'$student_id', 
				     'average':{$avg:'$score'}}}, 
					{'$sort':{'average':-1}}, {'$limit':1})
