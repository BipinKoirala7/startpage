import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";

function SignUp() {
    const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const mutationFn = async () => {
        const response = await fetch(
          "http://localhost:5000/api/o2auth/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username,
              email,
              password,
            }),
          }
        );
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error(response.statusText);
        }
      };

    const { mutate, isPending, error ,isError} = useMutation({mutationFn,
        onSuccess: () => {
            console.log("Sign up successful")
            navigate("/signIn");
        },
        onError: (error) => {
          console.error("Error signing up:", error)
        },
      }
    );
    function handleSubmit() {
        mutate()
    }
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center text-white">
      <div
        className="flex flex-col gap-4 bg-surface rounded px-6 py-8 w-[80%]
        sm:w-[60%]
        md:w-[50%]
        lg:w-[40%]
        xl:w-[30%]
      "
      >
        <p className="text-4xl font-bold">Sign Up</p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="username">Username</label>
            <input
              className="bg-primary px-4 py-2 rounded-sm outline-none "
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username..."
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="username">Email</label>
            <input
              className="bg-primary px-4 py-2 rounded-sm outline-none "
              type="email"
              name="username"
              id="email"
              placeholder="example@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="username">Password</label>
            <input
              className="bg-primary px-4 py-2 rounded-sm outline-none "
              type="password"
              name="username"
              id="password"
              placeholder="Enter Password..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button className="bg-primary px-4 py-2 rounded-sm transition duration-300 hover:bg-accent2 " onClick={handleSubmit}>
          {isPending ? "Loading..." : "Sign Up"}
              </button>
            {isError && <p className="text-red-500">Error: {error.message}</p>}
      </div>
    </div>
  );
}

export default SignUp;
