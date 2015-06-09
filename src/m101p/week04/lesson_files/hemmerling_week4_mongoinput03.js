db
use university
db
show collections
db.students.drop()
db.students.insert({ "student_id" : "Student1", "class_id": "Class1" })
db.students.insert({ "student_id" : "Student1", "class_id": "Class1" })
db.students.insert({ "student_id" : "Student2", "class_id": "Class1" })
db.students.insert({ "student_id" : "Student3", "class_id": "Class1" })
db.students.insert({ "student_id" : "Student4", "class_id": "Class2" })
db.students.find()
print ("Unique Index" )
db.students.ensureIndex( { "student_id" : 1, "class_id" : 1 }, { "unique" : true } )
db.students.find()
print ("Unique Index by DropDups" )
db.students.ensureIndex( { "student_id" : 1, "class_id" : 1 }, { "unique" : true, "dropDups" : true } )
db.students.find()
