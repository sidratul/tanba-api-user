### Install Deno
https://deno.land/manual/getting_started/installation

### Install Denon
https://deno.land/x/denon@2.4.7

```
deno install -qAf --unstable https://deno.land/x/denon/denon.ts
```

### Install Mongodb
https://docs.mongodb.com/manual/installation/

### Run App
```
denon start
```

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