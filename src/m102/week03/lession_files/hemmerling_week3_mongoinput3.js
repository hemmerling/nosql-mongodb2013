// suggested shell cmd line to run this:
//
// mongo --shell example2.js
//
// Note: the { out : … } parameter is for mongodb 1.8+
show dbs
use test
db.things.drop()
 
db.things.insert( { _id : 1, tags : ['dog', 'cat'] } );
db.things.insert( { _id : 2, tags : ['cat'] } );
db.things.insert( { _id : 3, tags : ['mouse', 'cat', 'dog'] } );
db.things.insert( { _id : 4, tags : [] } );
 
// map function
m = function(){
this.tags.forEach(
function(z){
emit( z , { count : 1 } );
}
);
};
 
// reduce function
r = function( key , values ){
var total = 0;
for ( var i=0; i<values.length; i++ )
total += values[i].count;
return { count : total };
};
 
// Test function, to be run on the MongoDB shell.
// Usually, emit() is just running on the MongoDB server
emit = function(k, v){
	print("emit");
	print(" k:" + k + " v:" + tojson(v));
};

res = db.things.mapReduce(m, r, { out : "myoutput" } );
 
printjson(res);
 
print("try db.myoutput.find()");

emit
db.things.find()
x = db.things.findOne()
m.apply(x)

r("dog", [{count:1}, {count:1}, {count:3}])
