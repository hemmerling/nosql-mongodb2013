use test5
db
db.people.insert( { name: "Alice" } )
db.people.insert( { name: "Bob" } )
db.people.insert( { name: "Charlie" } )
db.people.insert( { name: "Dave" } )
db.people.insert( { name: "Edgar" } )
db.people.insert( { name: "Fred" } )
db.people.find( { name: { $lt: "D" } } )
