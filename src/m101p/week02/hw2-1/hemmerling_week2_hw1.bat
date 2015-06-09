echo on
rem Restore the database "grades.json"
rem mongoimport -d students -c grades < grades.json
mongoimport -d students -c grades --drop < grades.json