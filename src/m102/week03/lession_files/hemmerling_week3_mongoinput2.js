show dbs
use test
db.list.drop()
db.list.insert ( { x : [
  { a : 1, b : 3 },
  { a : 2, b : 5 },
  { a : 3, b : 6, c : 7 }
] }
)
db.list.insert ( { x : [
  { a : 1, b : 3 },
  { a : 3, b : 6 },
  { a : 4, b : 7, c : 8 }
] }
)
db.list.insert ( { x : [
  { a : 1, b : 3 },
  { a : 4, b : 7 },
  { a : 5, b : 8, c : 9 }
] }
)
db.list.find()
print ( "Answer 1" )
db.things.find( { "x.a" : 1, "x.b" : 3 } )
print ( "Answer 2" )
db.things.find( { x : { a : 1, b : 3 } } )
print ( "Answer 3" )
db.things.find( { x : { $elemMatch : { a:1,b:3} } } )
