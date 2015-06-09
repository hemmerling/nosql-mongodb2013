show dbs
use pcat
show collections
t = db.pageviews
t.drop()
t.findOne()
t.update({ "_id": "/sports/football" }, { $inc: {views: 1}}, true )
t.find()
t.update({ "_id": "/sports/football" }, { $inc: {views: 1}}, true )
t.update({ "_id": "/sports/football" }, { $inc: {views: 1}}, true )
t.update({ "_id": "/sports/football" }, { $inc: {views: 1}}, true )
t.update({ "_id": "/sports/tennis" }, { $inc: {views: 1}}, true )
t.update({ "_id": "/sports/tennis" }, { $inc: {views: 1}}, true )
t.update({ "_id": "/sports/tennis" }, { $inc: {clicks: 1}}, true )
t.find()
