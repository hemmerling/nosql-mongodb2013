echo on
rem photoalbum
mongoimport -d photoalbum -c albums --drop < albums.json
mongoimport -d photoalbum -c images --drop < images.json
rem import ok
