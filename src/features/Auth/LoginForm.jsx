import { useState } from "react";
import { useLogin } from "./useLogin";
import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";
import { Link } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("joshuaadeyemi445@gmail.com");
  const [password, setPassword] = useState("123456789");
  const { isLoading, login } = useLogin();
  function handleSubmit(e) {
    e.preventDefault();
    if (!email && !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }
  return (
    <form
      className="bg-white p-10 rounded-lg shadow-lg min-w-full"
      onSubmit={handleSubmit}
    >
      <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
        Login to account
      </h1>
      <div className="space-y-8">
        <div>
          <label
            className="text-gray-800 font-semibold block my-3 text-md"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none disabled:bg-slate-300"
            type="email"
            name="email"
            id="email"
            required
            defaultValue={email}
            disabled={isLoading}
            autoComplete="current-email"
            placeholder="@email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label
            className="text-gray-800 font-semibold block my-3 text-md"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none disabled:bg-slate-300"
            type="password"
            name="password"
            id="password"
            placeholder="password"
            required
            defaultValue={password}
            disabled={isLoading}
            autoComplete="new-password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <Button
        // type="submit"
        type="primary"
        className="w-full mt-6 mb-3  rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans flex justify-center items-center gap-12 capitalize disabled:cursor-not-allowed"
        disabled={isLoading}
      >
        login
        {isLoading && <SpinnerMini />}
      </Button>
      <p>
        don't have account ?
        <Link to="/creat-account" className="text-green-400 underline ml-8">
          create account
        </Link>
      </p>{" "}
    </form>
  );
}

export default LoginForm;
