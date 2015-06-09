echo on
rem Restore the database "grades.js"
rem mongoimport -d students -c grades < grades.js
mongoimport -d students -c grades --drop < grades.js