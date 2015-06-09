show dbs
use students
show collections
print ("Number of grades:");
db.grades.count()
print ("Aggregation:");
// db.grades.aggregate({'$group':{'_id':'$student_id', 'average':{$avg:'$score'}}}, {'$sort':{'average':-1}}, {'$limit':1})
db.grades.aggregate(
	{'$group':{'_id':'$student_id', 'average':{$avg:'$score'}}}, 
	{'$sort':{'average':-1}}, {'$limit':1}
	)
print ("Find one Record");
db.grades.findOne()
print ("hw2-1 Solution");
db.grades.aggregate(
	{"$match" : { "type" : "exam" } },
	{"$match" : { "score": {$gte:65} } }, 
	{"$sort" : {"score":-1}}
	)
