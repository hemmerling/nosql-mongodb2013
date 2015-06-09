echo on
rem Restore the database
rem mongorestore
mongorestore --drop --db enron dump/enron
