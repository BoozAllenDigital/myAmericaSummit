//define databases
var adminDb= "admin";
var myDb= "mydb";

/* 
* CHANGE USERNAME/PASSWORD
*/
db.getSiblingDB(adminDb).createUser(
  {
    user: "ENTER_ADMIN_USER",
    pwd: "ENTER_APP_PASS",
    roles: ["root"]
  }
);

//create a non-admin user with read/write access to application db
db.getSiblingDB(myDb).createUser(
    {
      user: "ENTER_USER",
      pwd: "ENTER_APP_USER",
      roles: [
         { role: "readWrite", db: myDb }
      ]
    }
);
