#!/bin/bash

cd /home/
apt-get update
apt-get upgrade
apt install -y git
git clone https://github.com/sherunoizu/TestTaskARMO.git
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - &&\
sudo apt-get install -y nodejs
apt install -y npm
cd TestTaskARMO/
npm i
npm start