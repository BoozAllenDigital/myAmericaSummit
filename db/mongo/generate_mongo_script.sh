#!/bin/bash

echo "Enter db admin's username: [dbAdminUser]"
read DB_ADMIN_USERNAME
DB_ADMIN_USERNAME="${DB_ADMIN_USERNAME:-dbAdminUser}"

echo "Enter db admin's password: [P@\$\$12345]"
read DB_ADMIN_PASSWORD
DB_ADMIN_PASSWORD="${DB_ADMIN_PASSWORD:-P@\$\$12345}"

echo "Enter db user's username: [appUser]"
read DB_USER_USERNAME
DB_USER_USERNAME="${DB_USER_USERNAME:-appUser}"

echo "Enter db user's password: [P@\$\$1234]"
read DB_USER_PASSWORD
DB_USER_PASSWORD="${DB_USER_PASSWORD:-P@\$\$1234}"

cat << EOT > shell_script/addUsers.js
//define databases
var adminDb= "admin";
var myDb= "mydb";

db.getSiblingDB(adminDb).createUser(
  {
    user: "$DB_ADMIN_USERNAME",
    pwd: "$DB_ADMIN_PASSWORD",
    roles: ["root"]
  }
);

//connect to non-admin db to create application user with read/write access for the application
db.getSiblingDB(myDb).createUser(
    {
      user: "$DB_USER_USERNAME",
      pwd: "$DB_USER_PASSWORD",
      roles: [
         { role: "readWrite", db: myDb }
      ]
    }
);
EOT