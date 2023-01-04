#!/usr/bin/env bash

# Create the root directory

#mkdir Lisa   Not now because it exists.
cd ../..

# Create the client and server directories

mkdir client
mkdir server

# Create the src directories and the main entry point files

cd client
mkdir src
touch src/app.js
cd ../server
mkdir src
touch src/server.js
cd ..

# Create the components, images, lib, and pages directories

cd client/src
mkdir components
mkdir images
mkdir lib
mkdir pages
cd ../..

# Create the controllers, middleware, models, routes, and utils directories

cd server/src
mkdir controllers
mkdir middleware
mkdir models
mkdir routes
mkdir utils
cd ../..

# Create the .gitignore and README.md files

touch .gitignore
touch README.md