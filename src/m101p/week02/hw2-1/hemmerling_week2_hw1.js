db
use students
db
show collections
db.grades.count()
db.grades.aggregate({'$group':{'_id':'$student_id', 
					 'average':{$avg:'$score'}}}, 
					{'$sort':{'average':-1}}, {'$limit':1})
print ("Homework 1:");
db.grades.aggregate({ $match : {score : { $gte : 65 } } },
					{'$sort':{'score':1}}, {'$limit':1})
