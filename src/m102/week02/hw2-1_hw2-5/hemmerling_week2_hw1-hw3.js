show dbs
use pcat
// homework2.js
homework = { }
homework.a = function() { 
    if( db != "pcat" ) { 
        print("the db variable is not set to the 'pcat' database context. do that and try again?");
        return 0;
    }
    return db.products_bak.findOne({monthly_price:60}).limits.voice.over_rate + db.products_bak.find({type:'service'}).count();
}
homework.b = function() { 
    var x = db.products.findOne( { _id : ObjectId("507d95d5719dbef170f15c00") } );
    if( x == null ) { 
        print("hmmm, something isn't right? try again / investigate?");
        return 0;
    }
    return "" + x.limits.voice.over_rate + x.limits.sms.over_rate + x.monthly_price + x.term_years + db.products.find({term_years:3}).count();
}
homework.c = function() { 
    // this could be done with aggregation framework too; using the older and less sophisticated group command
    // so that it would work with pre v2.2 releases of mongodb.
    // e.g. something like 
    //   db.products.aggregate( { $group : { _id : "grand", total : { $sum : "$price" } } } ).result[0].total
    return "" + 
    db.products.group( {cond:{for:'ac3'},  reduce: function(obj,prev) { prev.csum += obj.price; },  initial: { csum: 0 } })[0].csum +
    db.products.group( {cond:{price:{$gte:0}},  reduce: function(obj,prev) { prev.csum += obj.price; },  initial: { csum: 0 } })[0].csum;
}
print ("hw2-1, a")
// The result of this command is the "solution" for hw2-1
// 3.05
homework.a()
// Homework hw2-2
print ("Homework hw2-2")
db.products.insert({
	"_id" : "ac9",
	"name" : "AC9 Phone",
	"brand" : "ACME",
	"type" : "phone",
	"price" : 333,
	"warranty_years" : 0.25,
	"available" : true
})
print ("hw2-2, a")
myObj = db.products.findOne({ "_id" : ObjectId("507d95d5719dbef170f15c00")})
myObj.term_years = 3
myObj.limits.sms.over_rate = 0.01
db.products.update( { "_id" : myObj._id}, myObj )
myObj = db.products.find({ "_id" : ObjectId("507d95d5719dbef170f15c00")})
// The result of this command is the "solution" for hw2-2
// 0.050.019031
homework.b()
// Homework hw2-3
myObj = db.products.find({ "limits" : { $exists : true }} )
myObj = db.products.find({ "limits" : { $exists : true }} ).count()
myObj = db.products.find({ "limits.voice" : { $exists : true }} )
// The result of this command is the "solution" for hw2-3
// 3
myObj = db.products.find({ "limits.voice" : { $exists : true }} ).count()
// Homework hw2-4
//db.products.findOne({},{for:1}).pretty
db.products.find({},{for:1})
db.products.ensureIndex( {"for": 1})
db.products.getIndexes()
db.system.indexes.find()
db.products.find( {"for" : { $all: ["ac3"] } })
// The result of this command is the "solution" for hw2-4
db.products.find( {"for" : { $all: ["ac3"] } }).count()
db.products.ensureIndex( {"for": 1})
db.products.getIndexes()
// The result of this command is the "solution" for hw2-4
db.products.find( {"for" : { $all: ["ac3"] } }).explain()
db.products.dropIndex( {"for":1} )
db.products.getIndexes()
db.products.find( {"for" : { $all: ["ac3"] } }).explain()
print ( "Homework hw2-5" )
// Homework hw2-5
// Attention, several calls
db.products.ensureIndex( {"for": 1})
print ( "Homework hw2-5, before increment:")
db.products.find({}, { "for":1, "price": 1 })
homework.c()
print ( "Homework hw2-5, after increment:")
db.products.update( {"for" : { $all: ["ac3"] } }, { $inc: {price: 2}}, { multi: true })
db.products.find({}, { "for":1, "price": 1 })
homework.c()
print ( "Homework hw2-5, no increment:")
db.products.update( {"for" : { $all: ["ac3"] } }, { $inc: {price: -2}}, { multi: true })
// The result of this command is the "solution" for hw2-5
// 89.5954.5
homework.c()
