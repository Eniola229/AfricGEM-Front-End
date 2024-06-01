import { useForm } from "react-hook-form";
import { useCreatAccount } from "./useCreateAccount";
import { Link } from "react-router-dom";

function Signup() {
  const { isLoading, creatAccount } = useCreatAccount();
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;
  function onSubmit({
    fullname,
    email,
    password,
    confirmPassword,
    phonenumber,
  }) {
    const data = {
      name: fullname,
      email,
      phone_number: phonenumber,
      password,
      password_confirmation: confirmPassword,
    };
    creatAccount(data, { onSettled: () => reset() });
  }
  return (
    <form
      className="bg-white p-10 rounded-lg shadow-lg min-w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
        Creat an account
      </h1>
      <div className="space-y-8">
        <div>
          <label
            className="text-gray-800 font-semibold block my-3 text-md"
            htmlFor="fullname"
          >
            Fullname
          </label>
          <input
            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
            type="text"
            // name="fullname"
            disabled={isLoading}
            id="fullname"
            placeholder="fullname"
            {...register("fullname", { required: "this field is required" })}
          />
          <p className="text-red-600 text-base mt-2">
            {errors?.fullname?.message}
          </p>
        </div>
        <div>
          <label
            className="text-gray-800 font-semibold block my-3 text-md"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
            type="email"
            name="email"
            disabled={isLoading}
            id="email"
            autoComplete="current-email"
            placeholder="xyz@email.com"
            {...register("email", {
              required: "this field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "pls enter a correct email",
              },
            })}
          />
          <p className="text-red-600 text-base mt-2">
            {errors?.email?.message}
          </p>
        </div>

        <div>
          <label
            className="text-gray-800 font-semibold block my-3 text-md"
            htmlFor="phonenumber"
          >
            Phone Number
          </label>
          <input
            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
            type="tel"
            name="phonenumber"
            id="phonenumber"
            disabled={isLoading}
            placeholder="0000000000"
            {...register("phonenumber", {
              required: "this field is required",
            })}
          />
          <p className="text-red-600 text-base mt-2">
            {errors?.phonenumber?.message}
          </p>
        </div>

        <div>
          <label
            className="text-gray-800 font-semibold block my-3 text-md"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
            type="password"
            name="password"
            id="password"
            disabled={isLoading}
            autoComplete="new-password"
            placeholder="password"
            {...register("password", {
              required: "this field is required",
              minLength: {
                value: 8,
                message: "password need to be a minimum of 8 length long",
              },
            })}
          />
          <p className="text-red-600 text-base mt-2">
            {errors?.password?.message}
          </p>
        </div>
        <div>
          <label
            className="text-gray-800 font-semibold block my-3 text-md"
            htmlFor="confirm"
          >
            Confirm password
          </label>
          <input
            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
            type="password"
            name="confirmPassword"
            autoComplete="new-password"
            id="confirmPassword"
            disabled={isLoading}
            placeholder="confirm password"
            {...register("confirmPassword", {
              required: "this field is required",
              validate: (value) =>
                value === getValues()?.password || "password need to match",
            })}
          />
          <p className="text-red-600 text-base mt-2">
            {errors?.confirmPassword?.message}
          </p>
        </div>
      </div>
      <button
        className="w-full mt-6 bg-green-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
        disabled={isLoading}
      >
        Register
      </button>
      <p className="mt-8">
        already have an account ?
        <Link to="/login" className="text-blue underline ml-8">
          Login
        </Link>
      </p>{" "}
    </form>
  );
}

export default Signup;
