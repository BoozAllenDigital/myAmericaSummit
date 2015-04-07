#!/bin/bash

./generate_mongo_script.sh

#create initial set of user
mongo shell_script/addUsers.js

#replace with auth enabled conf
cp /etc/mongod.conf /etc/mongod.conf.bak
cp mongod.conf /etc/mongod.conf