import { useState } from "react";
import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";
import { useUSer } from "../Auth/useUser";
import { useUpdateUserData } from "./useUpdateUser";
import { useParams } from "react-router-dom";

function EditProfileForm() {
  const { user } = useUSer();
  const { id } = useParams();
  const { isLoading, updateProfileData } = useUpdateUserData();
  const [email, setEmail] = useState(user?.email);
  console.log(user);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [phone, setPhone] = useState(user?.phone_number);
  const [fullName, setFullName] = useState(user?.name);
  const [error, setError] = useState({ newpass: "", oldpass: "" });
  //   const [avatar, setAvatar] = useState(null);
  function handleSubmit(e) {
    e.preventDefault();
    // if (!oldPassword && !newPassword && !fullName && !phone) return;
    // if (oldPassword !== user?.password) {
    //   setError((error) => {
    //     return (error = {
    //       ...error,
    //       oldpass: "incorrect old password",
    //     });
    //   });
    //   return;
    // }
    if (newPassword === "password") {
      setError((error) => {
        return (error = {
          ...error,
          newpass: "password can not be password",
        });
      });
      return;
    }
    const data = {
      name: fullName,
      phone_number: phone,
    };

    updateProfileData({ id, data });
  }
  return (
    <div>
      <form
        className="bg-white p-10 rounded-lg shadow-lg min-w-full"
        onSubmit={handleSubmit}
      >
        <h3 className="text-lg mb-6 text-gray-600 font-bold font-sans">
          Edit Profile
        </h3>
        <div className="space-y-8">
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none disabled:bg-slate-300 disabled:cursor-not-allowed"
              type="text"
              name="name"
              id="name"
              defaultValue={fullName}
              //   disabled={isLoading}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none disabled:bg-slate-300 disabled:cursor-not-allowed"
              type="email"
              name="email"
              id="email"
              defaultValue={email}
              disabled
              autoComplete="current-email"
              placeholder="@email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="phone_number"
            >
              Phone number
            </label>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none disabled:bg-slate-300"
              type="tel"
              name="phone_number"
              id="phone_number"
              placeholder="+000 83838 8288"
              defaultValue={phone}
              disabled={isLoading}
              autoComplete="new-tel"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="oldpassword"
            >
              Old Password
            </label>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none disabled:bg-slate-300"
              type="password"
              name="password"
              id="oldpassword"
              placeholder="password"
              defaultValue={oldPassword}
              disabled={isLoading}
              autoComplete="new-password"
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <p className="text-red-600 text-base mt-2">{error?.oldpass}</p>
          </div>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="newpassword"
            >
              New Password
            </label>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none disabled:bg-slate-300"
              type="password"
              name="password"
              id="newpassword"
              placeholder="password"
              defaultValue={newPassword}
              minLength={8}
              disabled={isLoading}
              autoComplete="new-password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <p className="text-red-600 text-base mt-2">{error?.newpass}</p>
        </div>
        <div className="flex justify-end gap-8 items-center">
          <button
            className=" mt-6 mb-3  rounded-md px-4 py-2 border-2 border-yellow-500 text-base text-gray-800 tracking-wide font-medium capitalize disabled:cursor-not-allowed"
            type="reset"
            disabled={isLoading}
          >
            reset form
          </button>
          <Button
            className=" mt-6 mb-3 bg-yellow-500 rounded-md px-4 py-2 text-base text-gray-800 tracking-wide font-medium capitalize disabled:cursor-not-allowed flex items-center justify-between gap-4"
            disabled={isLoading}
          >
            update profile
            {isLoading && <SpinnerMini className="x" />}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default EditProfileForm;
