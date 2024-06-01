import Logo from "./Logo";
import SearchInput from "./SearchInput";
import Button from "./Button";
import { HiLogout, HiPlus } from "react-icons/hi";
import UserAvatar from "../features/user/UserAvatar";
import { HiOutlineBell } from "react-icons/hi2";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { useUSer } from "../features/Auth/useUser";
import Spinner from "./Spinner";
import { useLogout } from "../features/Auth/useLogout";
import { useState } from "react";
// import { useUSer } from "../features/Auth/useUser";
// const FAKE_USER = {
//   name: "friyo",
//   userName: "friyoCode01",
//   isAuntenticated: false,
// };
function Header() {
  // just for demo
  const [open, SetOpen] = useState(false);
  const [params, setParams] = useSearchParams();
  const { isLoading, isAuthenticated } = useUSer();
  const { logout } = useLogout();
  const navigate = useNavigate();
  return (
    <header className="bg-stone-50 mb-4 sticky top-0 z-50 col-span-full py-6 text-slate-50">
      <div className="flex justify-evenly items-center">
        <div className="flex items-center gap-6">
          <Logo />

          <SearchInput />
        </div>
        <>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              {isAuthenticated ? (
                <div className="flex items-center gap-5">
                  <Button
                    type="small"
                    className="flex items-center gap-2 self-center font-black"
                    handler={() => {
                      SetOpen((open) => !open);
                      setParams(`open=${open}`);
                    }}
                  >
                    <HiPlus className="text-xl" />
                    creat a post{" "}
                  </Button>
                  <Button className="text-2xl text-black">
                    <HiOutlineBell />
                  </Button>
                  <Button handler={() => navigate("account")}>
                    <UserAvatar />
                  </Button>
                  <Button handler={() => logout()} className="text-black">
                    <HiLogout />
                  </Button>
                </div>
              ) : (
                <div className="ml-12 text-slate-50 space-x-2 ">
                  <span className="bg-yellow-500 py-2 px-4 font-medium hover:bg-yellow-300">
                    <NavLink to="login">Login</NavLink>
                  </span>
                  <span className="border border-black py-2 px-4 font-medium text-black hover:border-yellow-500 hover:text-yellow-500">
                    <NavLink to="creat-account">Creat an account</NavLink>
                  </span>
                </div>
              )}
            </>
          )}
        </>
      </div>
    </header>
  );
}

export default Header;
