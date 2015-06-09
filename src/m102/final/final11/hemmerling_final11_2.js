show dbs
use snps
show collections
db.problem11.aggregate([ {$group: { _id: { N2: "$N2", mutant: "$mutant" } }} ]).result.length