# /bin/bash

URL=${1:-http://192.168.99.100:30548/}

while true 
do  
  curl $URL
  sleep .5;
done