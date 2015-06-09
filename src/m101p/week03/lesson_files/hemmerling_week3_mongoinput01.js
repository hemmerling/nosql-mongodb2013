use schools
db.students.drop()
db.teachers.drop()
db.students.insert ({ "_id": 0, "name" : "Rolf", "teachers" : [0, 1] })
db.students.insert ({ "_id": 1, "name" : "Horst", "teachers" : [0, 1, 3] })
db.students.insert ({ "_id": 2, "name" : "Anneliese", "teachers" : [1, 2, 3] })
db.students.insert ({ "_id": 3, "name" : "Karl", "teachers" : [0, 3] })

db.teachers.insert ({ "_id": 0, "name" : "Marc Horowitz" })
db.teachers.insert ({ "_id": 1, "name" : "John Hennessy" })
db.teachers.insert ({ "_id": 2, "name" : "Bruce Wolley" })
db.teachers.insert ({ "_id": 3, "name" : "James Plummer" })

db.students.ensureIndex({'teachers':1})
db.students.find({'teachers':{'$all':[1,3]}})
// db.students.find({'teachers':{'$all':[1,3]}}).explain()
