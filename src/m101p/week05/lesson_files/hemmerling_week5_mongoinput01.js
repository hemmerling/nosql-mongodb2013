show dbs
use xx
db.products.aggregate([{$group:{_id:"$manufacturer", num_products:{$sum:1}}}])
