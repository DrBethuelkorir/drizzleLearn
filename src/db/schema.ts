import { serial, pgTable, text } from "drizzle-orm/pg-core";

export const schema =pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
  email: text("email"),
  createdAt: text("createdAt"),
});