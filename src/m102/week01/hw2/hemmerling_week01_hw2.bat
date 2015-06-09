echo on
rem Restore the database "products.js"
mongoimport -d pcat -c products --drop < products.json