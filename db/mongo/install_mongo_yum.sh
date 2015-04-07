#!/bin/bash

echo "start setting up mongodb"

sudo yum -y update

echo "[10gen]
name=10gen Repository
baseurl=http://downloads-distro.mongodb.org/repo/redhat/os/x86_64
gpgcheck=0" | sudo tee -a /etc/yum.repos.d/10gen.repo

sudo yum install -y mongo-10gen and mongo-10gen-server
sudo chkconfig mongod on

echo "starting mongodb"
sudo service mongod start

