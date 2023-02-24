import { Form, redirect, useActionData } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import axios from "axios";

export default function Contact() {
  const data = useActionData();

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-4xl text-center tracking-tight font-extrabold text-gray-900">
              Contact us now!
            </h2>
            {data && data.error && (
              <p className="text-center mt-4 text-red-500">{data.error}</p>
            )}
          </div>
          <Form method="post" action="/help/contact" className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div className="pt-4">
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  type="message"
                  rows={8}
                  autoComplete="current-message"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Message"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-gray-900">
                  I agree to the Terms and Conditions.
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Send message
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export const contactAction = async ({ request }) => {
  const data = await request.formData();
  const submission = {
    email: data.get("email"),
    message: data.get("message"),
    terms: data.get("terms"),
  };

  if (submission.terms !== "on") {
    return { error: "Check the terms and conditions checkbox." };
  }
  //Post request + validate data in the backend and return errors if there are any
  try {
    await axios.post(import.meta.env.VITE_API_URL + "/messages/", submission);
  } catch (err) {
    return { error: "Something went wrong..." };
  }
  return redirect("/");
};
