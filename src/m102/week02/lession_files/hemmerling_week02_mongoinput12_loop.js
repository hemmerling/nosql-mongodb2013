show dbs
use pcat
db.test.drop ()
print ( "Loop:" )
var i = 0;
while ( 1 ) { 
db.test.insert({ ts: new Date() })
//i++
//print ( "x=" + i )
};

