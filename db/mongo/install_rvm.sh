#!/bin/bash

#install rvm and mongo gem to execute parser to ingest inital dataset
\curl -sSL https://get.rvm.io | bash -s stable
source ~/.rvm/scripts/rvm
sudo yum -y install rubygems
gem install mongo