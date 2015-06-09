db
use test3
db
db.users.save({name:"Rolf Hemmerling", city_of_birth:"Saeckingen"})
db.users.save({name:"Andreas Mueller", city_of_birth:"Hamburg", favourite_color:"green"})
db.users.find()
db.users.find().pretty()
j = db.users.findOne({name:"Rolf Hemmerling", city_of_birth:"Saeckingen"})
j
j.favourite_color = "red"
db.users.save(j)
db.users.find().pretty()

