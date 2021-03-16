### create database user
```
use tanba
db.createUser(
   {
     user: "tanbamongo",
     pwd: passwordPrompt(),
     roles: [ "readWrite", "dbAdmin" ]
   }
)
```

```
Successfully added user: { "user" : "tanbamongo", "roles" : [ "readWrite", "dbAdmin" ] }
```