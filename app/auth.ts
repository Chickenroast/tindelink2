import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcrypt-ts";
import { getUser } from "./data/db";
import { authConfig } from "app/auth.config";
import { NextApiRequest, NextApiResponse } from "next";

interface User {
  id: string;
  email: string;
  password: string;
  role: string;
  location: string;
}

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
        credentials: Partial<Record<string | number, unknown>>,
        request: Request
      ): Promise<User | null> {
        try {
          const { email, password } = credentials as {
            email: string;
            password: string;
          };

          // Retrieve user data from the database
          const user = await getUser(email);

          // Check if user exists
          if (!user || Array.isArray(user)) return null;

          // Convert user data to the expected format
          const userData: User = {
            id: String(user.id),
            email: user.email ?? "",
            password: user.password ?? "",
            role: user.role ?? "",
            location: user.location ?? "",
          };

          // Compare passwords
          const passwordsMatch = await compare(password, userData.password);

          // Return the user if passwords match, otherwise return null
          return passwordsMatch ? userData : null;
        } catch (error) {
          console.error("Error fetching user:", error);
          return null;
        }
      },
    }),
  ],
});
