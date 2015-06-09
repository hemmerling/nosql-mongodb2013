db
use school
person = db.students.find({_id:100}).pretty()

number_of_students = db.students.count()
for ( i=0; i<number_of_students;i++) {
	student = db.students.find( { "_id" : i } )[0];
	better_homework = (student.scores[2].score < student.scores[3].score)
	if ( better_homework )
	{
	 db.students.update (
	 	{ "_id" : i },
	 	{ $unset: {"scores.2" : 1} }
		)
	}
	else
	{
	 db.students.update (
	 	{ "_id" : i },
	 	{ $unset: {"scores.3" : 1} }
		)
	};
};

person = db.students.find({_id:100}).pretty()
