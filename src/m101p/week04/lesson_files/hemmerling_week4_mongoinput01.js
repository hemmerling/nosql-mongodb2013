// Please provide the mongo shell command to add an index to a collection 
// named students, having the index key be class, student_name.
db
use university
db
show collections
// Insert
db.students.drop()
db.students.insert({ "student_name" : "Student1", "class": "Class1" })
db.students.insert({ "student_name" : "Student2", "class": "Class1" })
db.students.insert({ "student_name" : "Student3", "class": "Class1" })
db.students.insert({ "student_name" : "Student4", "class": "Class2" })
db.students.ensureIndex( { "class" : 1, "student_name" : 1 } )
db.system.indexes.find()
db.students.find().explain()