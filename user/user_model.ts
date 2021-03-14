import { UserSchema } from "./user_interface.ts"
import { FindOptions } from "https://deno.land/x/mongo@v0.22.0/mod.ts";
import db from "database/mongodb.ts"

const users = db.collection<UserSchema>("users");

export async function insertUser(userdata : UserSchema) {
  const insertId = await users.insertOne(userdata);
  return insertId  as { $oid: string };
}

export async function findAll() {
  return await users.find({},{ projection: {username:1} } ).toArray();
} 