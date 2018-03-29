#!/bin/bash

# Install node_modules and deploy application to production
yarn
npm run deploy

# build your docker image
docker build...

# push your docker image
docker push...

# run cleanup commands
docker rm -v $(docker ps -a -q -f status=exited) 2>&1
docker rmi $(docker images -f "dangling=true" -q) 2>&1