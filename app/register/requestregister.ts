"use server";
import { redirect } from "next/navigation";
import { createUser, getUser } from "../data/db";

export default async function useregister(
  formData: FormData,
  selectedOption: string
) {
  let email = formData.get("email") as string;
  let password = formData.get("password") as string;
  let user = await getUser(email);

  if (user.length > 0) {
    return "User already exists"; // TODO: Handle errors with useFormStatus
  } else {
    await createUser(email, password, selectedOption);
    redirect("/login");
  }
}
