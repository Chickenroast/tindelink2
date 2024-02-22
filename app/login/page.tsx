"use client";
import Link from "next/link";
import { Form } from "app/form";
import { SubmitButton } from "app/submit-button";
import useServerAction from "./requestlogin";
import { useState } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Login() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handlelogin = async (formData: FormData) => {
    try {
      await useServerAction(formData);
    } catch (error) {
      if (error === "PasswordError") {
        setErrorMessage("Incorrect password. Please try again.");
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
    }
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-secondary">
      <div className="z-10 w-full max-w-md -mt-80 overflow-hidden rounded-2xl border border-purple shadow-xl h-[80%] mx-[5%] md:mx-auto bg-purple">
        <div className="flex flex-col items-center justify-center space-y-2 border-b border-purple bg-purple px-4 py-6 pt-8 text-center sm:px-16">
          <div className="space-y-[-40%]">
            <div>
              <FontAwesomeIcon
                icon={faUser}
                color="#66B6D6"
                className=" text-2xl"
              />
            </div>
            <div className="">
              <canvas className="border-b border-primary" />
            </div>
          </div>
          <h3 className="text-xl text-gray-200 font-semibold">Sign In</h3>
          <p className="text-sm text-gray-500">
            Use your email and password to sign in
          </p>
        </div>
        <div className="">
          {" "}
          <Form action={handlelogin}>
            <div className="mt-8">
              <SubmitButton>Sign in</SubmitButton>
            </div>
            {errorMessage && (
              <p className="text-center text-sm text-red-500">{errorMessage}</p>
            )}
            <p className="text-center text-sm text-gray-400">
              {"Don't have an account? "}
              <Link href="/register" className="font-semibold text-white">
                Sign up
              </Link>
              {" for free."}
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
}
