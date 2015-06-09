db
use school
db
show collections
print("Is the Count = 200?");
db.students.count()
print("Check _id:100");
db.students.find({_id:100}).pretty()
//{
//	"_id" : 100,
//	"name" : "Demarcus Audette",
//	"scores" : [
//		{
//			"score" : 47.42608580155614,
//			"type" : "exam"
//		},
//		{
//			"score" : 44.83416623719906,
//			"type" : "quiz"
//		},
//		{
//			"score" : 39.01726616178844,
//			"type" : "homework"
//		}
//	]
//}

print("To verify that you have completed this task correctly"+
	  "provide the identify of the student with the highest average in the class"+
	  "with following query that uses the aggregation framework."+
	   "The answer will appear in the _id field of the resulting document");
db.students.aggregate({'$unwind':'$scores'},{'$group':{'_id':'$_id', 
					   'average':{$avg:'$scores.score'}}}, 
					   {'$sort':{'average':-1}}, {'$limit':1})
