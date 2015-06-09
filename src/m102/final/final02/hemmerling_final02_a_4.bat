@echo off
rem M102 Final
rem Script to make a test replica set. See problem #1.

rem if you need to start over try:
rem rmdir data /s
rem (careful that deletes that everything under data/ recursively!)

rem we expect nothing to be running.  
rem you might have a mongo shell running which is ok...but 
rem no mongod or mongos processes.

echo running mongod processes...

rem start mongod --smallfiles --oplogSize 50 --port 27003 --dbpath data/z3 --replSet z
start mongod --smallfiles --oplogSize 50 --port 27003 --dbpath z3 --replSet z

rem give them time to start. note this might not be enough time!
sleep 1

echo "Now run:"
echo "  mongo --shell --port 27003 a.js"
