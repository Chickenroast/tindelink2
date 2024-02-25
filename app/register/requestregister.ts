"use server";
import { redirect } from "next/navigation";
import { createUser, getUser } from "../data/db";

export default async function useregister(
  formData: FormData,
  selectedOption: string
) {
  let email = formData.get("email") as string;
  let password = formData.get("password") as string;
  let location = formData.get("location") as string;
  let user = await getUser(email);

  if (user !== null && Array.isArray(user) && user.length > 0) {
    return "User already exists";
  } else {
    await createUser(email, password, selectedOption, location);
    redirect("/login");
  }
}
