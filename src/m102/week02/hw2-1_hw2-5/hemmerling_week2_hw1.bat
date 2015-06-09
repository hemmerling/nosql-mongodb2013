echo on
rem Restore the database "products.json"
mongoimport -d pcat -c products --drop < products.json