use test4
db
for ( i=0; i<1000; i++ ) { 
	names =["exam", "essay", "quiz"]; 
	for (j=0; j<3; j++) { 
		db.scores.insert ( { "student" : i, 
						     "type" :  names[j], 
						     "score": Math.round(Math.random()*100) 
						   } 
						 ); 
						}
						}
// db.scores.find( {type: "essay", "score": 50}, { "student":true, "_id": false})
db.scores.find( {score: { $gt: 95 }, type: "essay" } )
db.scores.find( {score: { $gt: 95, $lte: 99 }, type: "essay" } )

