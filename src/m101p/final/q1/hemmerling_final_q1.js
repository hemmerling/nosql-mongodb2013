show dbs
use enron
show collections
db.messages.find().count()
db.messages.findOne()
db.messages.find({"headers.From":"andrew.fastow@enron.com",
                  "headers.To":"jeff.skilling@enron.com"}).count()
