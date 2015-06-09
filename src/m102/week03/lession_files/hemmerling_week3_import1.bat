echo on
rem Restore the database "zips.json"
mongoimport -d usa -c zips --drop < zips.json