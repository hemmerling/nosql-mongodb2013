// Please provide the mongo shell command to add an index to a collection 
// named students, having the index key be class, student_name.
db
use university
db
show collections
// Insert
db.students.dropIndex( { "student_id" : 1, "class_id" : 1 } )
db.students.drop()
db.students.insert({ "student_id" : "Student1", "class_id": "Class1" })
db.students.insert({ "student_id" : "Student1", "class_id": "Class1" })
db.students.insert({ "student_id" : "Student2", "class_id": "Class1" })
db.students.insert({ "student_id" : "Student3", "class_id": "Class1" })
db.students.insert({ "student_id" : "Student4", "class_id": "Class2" })
db.students.find()
print ("Unique Index by DropDups" )
db.students.ensureIndex( { "student_id" : 1, "class_id" : 1 }, { "unique" : true, "dropDups" : true } )
db.students.find()
db.system.indexes.find()
db.products.getIndexes()
db.students.find().explain()
