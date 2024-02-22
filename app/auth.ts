import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcrypt-ts";
import { authConfig } from "app/auth.config";
import { User as NextAuthUser } from "@auth/core/types"; // Import the User type from NextAuth
import { User as DBUser } from "./data/db"; // Import the User type from your database

// Ensure that the User type from your database is compatible with the User type from NextAuth
type User = DBUser & Partial<NextAuthUser>;

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(
        credentials: Partial<Record<string, unknown>>,
        request: Request
      ): Promise<User | null> {
        try {
          // Call the API route to retrieve user data
          const response = await fetch("/api/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
          });

          if (!response.ok) {
            throw new Error("User not found");
          }

          const user = await response.json();

          // Compare passwords
          const passwordsMatch = await compare(
            credentials.password as string,
            user.password as string
          );

          // Return the user if passwords match, otherwise return null
          return passwordsMatch ? user : null;
        } catch (error) {
          console.error("Error fetching user:", error);
          return null;
        }
      },
    }),
  ],
});
