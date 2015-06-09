db
use students
db
show collections
students1 = db.grades.aggregate( 
  [ { $group: { _id:0, 
      max_students: { $max: "$student_id"} } } 
  ] );
number_of_students = students1.result[0].max_students + 1;
print ( "Number of students = ", number_of_students );
for ( i=0; i<number_of_students;i++) {
	students2 = db.grades.find( { "student_id" : i, "type" : "homework" }, 
									{ "score": true }
								  ).sort( { "score": 1 } );
	print ( i, students2[0]._id, students2[0].score, students2[1].score );
	db.grades.remove( { "_id": students2[0]._id } )
};
number_of_documents = db.grades.count();
print ( "Number of documents ( expected: 600 ): " + number_of_documents );
