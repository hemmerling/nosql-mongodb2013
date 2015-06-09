use test1
db
db.things.save({a:1, b:2, c:3})
db.things.save({a:3, b:4, c:6, d:200})
db.things.save({a:1, b:1, fruit:['apple', 'orange', 'pear']})
db.things.save({name:"andrew", address:{street:"ela drive", city:"Palo Alto", zip:"94305", house_number:3}})
db.things.find()
db.things.find({a:1})
db.things.find({name:"andrew"}).pretty()
