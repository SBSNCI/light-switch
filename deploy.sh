#!/usr/bin/env bash
CURRENT_INSTANCE=$(docker ps -a -q --filter ancestor="$IMAGE_NAME" --format="{{.ID}}")

if [ "$CURRENT_INSTANCE" ]
then
  docker rm $(docker stop $CURRENT_INSTANCE)
fi

docker pull $IMAGE_NAME

CONTAINER_EXISTS=$(docker ps -a | grep node_app)
if [ "$CONTAINER_EXISTS" ]
then
  docker rm node_app
fi

docker create -p 8445:8445 --name node_app $IMAGE_NAME

echo $PRIVATE_KEY > privatekey.pem

echo $SERVER > server.cert

docker cp ./privatekey.pem node_app:/privatekey.pem

docker cp ./server.crt node_app:/server.crt

docker start node_app

#BEFORE WE ADDED DOCKER TO THE PIPELINE:
#sudo apt update && sudo apt install nodejs npm
#sudo npm install -g pm2
#pm2 stop example_app
#cd ExampleApplication2/
#npm install
#echo $PRIVATE_KEY > privatekey.pem
#echo $SERVER > server.crt
#pm2 start ./bin/www --name example_app
