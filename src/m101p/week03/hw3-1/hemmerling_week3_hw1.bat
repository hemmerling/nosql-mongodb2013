echo on
rem Restore the database "students.json"
rem mongoimport -d school -c students < students.json
mongoimport -d school -c students --drop < students.json
pause
