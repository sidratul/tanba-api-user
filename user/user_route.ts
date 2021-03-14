import type { Group } from "abc/mod.ts";
import { users } from "./user_controller.ts";

export default function (g: Group) {
  g
    .get("/", users)
    .get("/:id", users)
    .put("/:id", users)
    .delete("/:id", users)
}