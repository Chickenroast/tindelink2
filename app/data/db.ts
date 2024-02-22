import { drizzle } from "drizzle-orm/postgres-js";
import { pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { eq } from "drizzle-orm";
import postgres from "postgres";
import { genSaltSync, hashSync } from "bcrypt-ts";

// Optionally, if not using email/pass login, you can
// use the Drizzle adapter for Auth.js / NextAuth
// https://authjs.dev/reference/adapter/drizzle
let client = postgres(`${process.env.POSTGRES_URL!}?sslmode=require`);
let db = drizzle(client);

export interface User {
  id: number;
  email: string;
  password: string;
  role: string;
  location: string;
}

let users = pgTable("User", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 64 }),
  password: varchar("password", { length: 64 }),
  role: varchar("role", { length: 20 }),
  location: varchar("location", { length: 100 }),
});

export async function getUser(email: string) {
  try {
    console.log("Fetching user with email:", email);
    const result = await db.select().from(users).where(eq(users.email, email));
    console.log("User found:", result);

    // Check if user data is empty or null
    if (!result || result.length === 0) {
      return null;
    }

    // Extract user data and handle null values
    const userData = {
      id: result[0].id,
      email: result[0].email ?? "", // Use an empty string if email is null
      password: result[0].password ?? "", // Use an empty string if password is null
      role: result[0].role ?? "", // Use an empty string if role is null
      location: result[0].location ?? "", // Use an empty string if location is null
    };

    return userData;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}
export async function getUserById(id: number) {
  try {
    console.log("Fetching user with ID:", id);
    const result = await db.select().from(users).where(eq(users.id, id));
    console.log("User found:", result);
    return result;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}
export async function updateUser(id: number, updates: Partial<User>) {
  return await db.update(users).set(updates).where(eq(users.id, id));
}

export async function createUser(
  email: string,
  password: string,
  role: string,
  location: string
) {
  let salt = genSaltSync(10);
  let hash = hashSync(password, salt);

  return await db
    .insert(users)
    .values({ email, password: hash, role, location });
}
