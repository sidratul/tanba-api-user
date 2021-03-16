import { User } from "./user_setting.ts"
import db from "database/mongodb.ts"

const users = db.collection<User>("users");

export async function insertUser(userdata : User) {
  const insertId = await users.insertOne(userdata);
  return insertId  as { $oid: string };
}

export async function findAll() {
  return await users.find({},{ projection: {username:1} } ).toArray();
}

export async function findByUniqueType(unique: string){
  return await users.findOne({
    username: unique
  });
}