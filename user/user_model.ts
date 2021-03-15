import { UserSchema } from "./user_interface.ts"
import db from "database/mongodb.ts"

const users = db.collection<UserSchema>("users");

export async function insertUser(userdata : UserSchema) {
  const insertId = await users.insertOne(userdata);
  return insertId  as { $oid: string };
}

export async function findAll() {
  return await users.find({},{ projection: {username:1} } ).toArray();
} 