#!/bin/bash

DEPLOY_SERVER=$DEPLOY_SERVER
SERVER_FOLDER="relounge"

# Building React output
yarn install
yarn run build

echo "Deploying to ${DEPLOY_SERVER}"
scp -r build/ admin@${DEPLOY_SERVER}:/var/www/html/

echo "Finished copying the build files"