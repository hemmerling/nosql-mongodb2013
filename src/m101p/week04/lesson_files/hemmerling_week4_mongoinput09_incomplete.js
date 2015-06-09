use students
// Achtung, grades_with_classes.js is unvollstaendig, 
// nicht alle klassen eingetragen
db.grades.ensureIndex( { "class_id" : 1 })
db.grades.ensureIndex( {"student_id" : 1 })
db.grades.ensureIndex( { "class_id": 1, "student_id": 1 })
// db.system.indexes.find()
db.grades.getIndexes()
db.grades.find({student_id: {$gt:100}, class_id:20 }).sort({"student_id":1})
db.grades.find({student_id: {$gt:100}, class_id:20 }).sort({"student_id":1}).explain()
db.grades.find({student_id: {$gt:100}, class_id:20 }).sort({"student_id":1}).hint({"class_id":1})
db.grades.find({student_id: {$gt:100}, class_id:20 }).sort({"student_id":1}).hint({"class_id":1}).explain()

