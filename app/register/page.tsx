"use client";
import Link from "next/link";
import { Form } from "app/form";
import useregister from "./requestregister";
import { SubmitButton } from "app/submit-button";
import { useState } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Register() {
  const [selectedOption, setSelectedOption] = useState("");
  const [location, setLocation] = useState("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  // Define the type for formData as FormData
  const handleSubmit = (formData: FormData) => {
    formData.append("location", location);
    useregister(formData, selectedOption);
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
          <h3 className="text-xl text-gray-200 font-semibold">Sign Up</h3>
          <p className="text-sm text-gray-500">
            Create an account with your email and password
          </p>
        </div>
        <Form action={handleSubmit}>
          <div>
            <div className="mt-3">
              <label
                htmlFor="location"
                className="block text-xs text-gray-300 uppercase "
              >
                LOCATION
              </label>
              <input
                type="text"
                value={location}
                onChange={handleLocationChange}
                placeholder="Location"
                className="mt-1 block w-full appearance-none rounded-xl border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
              />
            </div>
            <div className="mt-7">
              <label
                htmlFor="role"
                className="block text-xs text-gray-300 uppercase "
              >
                WHAT YOU NEED ?
              </label>
              <select
                value={selectedOption}
                onChange={handleOptionChange}
                className="mt-1 block w-full appearance-none rounded-xl border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
              >
                <option
                  value=""
                  className=" block w-full appearance-none rounded-xl border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                >
                  Select Role
                </option>
                <option value="jobSeeker">Find a job</option>
                <option value="employer">Hiring</option>
              </select>
            </div>
            <div className="mt-8">
              <SubmitButton>Sign Up</SubmitButton>
            </div>
            <div className="mt-4">
              <p className="text-center text-sm text-gray-600">
                {"Already have an account? "}
                <Link href="/login" className="font-semibold text-gray-200">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
