#!/bin/bash

#following script will install mongodb for the first time on redhat environment
./install_mongo_yum.sh
./install_rvm.sh

#following script will execute the parser to setup the onet database in mongodb
./setup_database.sh
