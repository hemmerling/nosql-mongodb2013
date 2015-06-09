echo on
rem Restore the databases
mongoimport -d q7 -c albums --drop < question7_albums.json
mongoimport -d q7 -c images --drop < question7_images.json