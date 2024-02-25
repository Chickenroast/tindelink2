import { drizzle } from "drizzle-orm/postgres-js";
import { pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { eq } from "drizzle-orm";
import postgres from "postgres";
import { genSaltSync, hashSync } from "bcrypt-ts";
import { NextApiRequest, NextApiResponse } from "next";

let client = postgres(`${process.env.POSTGRES_URL!}?sslmode=require`);
let db = drizzle(client);

export interface User {
  id: string;
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

export async function getUser(email: string): Promise<User | null> {
  try {
    console.log("Fetching user with email:", email);
    const result = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .then((rows) => rows[0]);
    console.log("User found:", result);
    return result
      ? {
          id: result.id.toString(), // Transform id to string
          email: result.email!,
          password: result.password!,
          role: result.role!,
          location: result.location!,
        }
      : null;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
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
