use test6
db
db.users.insert( { "name" : "rolf", "email" : "rolf@gmx.net"} )
db.users.insert( { "name" : "andreas", "email" : "andreas@gmx.net"} )
db.users.insert( { "name" : "horst q", "email" : "horst@gmx.net"} )
db.users.insert( { "name" : "quincy", "email" : "tom@gmx.net"} )
db.users.find({"name":{$regex:"q"}, "email": {$exists: true}})
