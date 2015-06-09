show dbs
use pcat
show collections
b = db.products_bak; db.products.find().forEach( function(o){ b.insert(o) } )
 // check it worked: 
show collections
b.count()
