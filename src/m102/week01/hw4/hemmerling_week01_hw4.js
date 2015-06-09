use pcat
db.products.findOne()
db.products.count()
print ("Find 1")
db.products.find({},{name:1,_id:0}).sort({name:1})
print ("Find 2 - Ascending")
var c = db.products.find({},{name:1,_id:0}).sort({name:1}); 
while( c.hasNext() ) print( c.next().name); 
print ("Find 3 - Ascending")
var c = db.products.find({}).sort({name:1}); 
c.forEach( function(doc){ print(doc.name) } );
print ("Find 4 - Descending")
var c = db.products.find({}).sort({name:-1}); 
while( c.hasNext() ) print( c.next().name);