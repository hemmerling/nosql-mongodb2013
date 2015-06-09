echo on
rem hw1-2
mongoimport -d m101p_week1 -c hw1_2 --drop < hemmerling_week1_hw2.json
rem import ok
mongo < hemmerling_week1_hw2.js
pause
