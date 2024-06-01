import {
  HiChartSquareBar,
  HiOutlineAcademicCap,
  HiOutlineUserGroup,
  HiPlay,
} from "react-icons/hi";

import { HiOutlineQueueList, HiUser } from "react-icons/hi2";
// import { PiAddressBook } from "react-icons/pi";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { useUSer } from "../features/Auth/useUser";

function Navigationbar() {
  const urlLocation = useLocation();
  const isProfilePage = urlLocation?.pathname.includes("/account");
  const { isAuthenticated } = useUSer();
  return (
    <nav className="mt-12">
      <div>
        <div className="flex   flex-col items-center">
          <ul className="flex gap-4 text-lg  flex-col">
            {isProfilePage && <Logo className="h-14" />}
            <li>
              <NavLink
                to="/"
                className="hover:underline  transform py-2 px-3 rounded-md flex items-center gap-2"
              >
                <HiOutlineQueueList />
                Feeds
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/business"
                className="hover:underline transform py-2 px-3 rounded-md flex items-center gap-2"
              >
                <HiChartSquareBar />
                Business
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/educational"
                className="hover:underline transform py-2 px-3 rounded-md flex items-center gap-2"
              >
                <HiOutlineAcademicCap />
                Educational
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movie"
                className="hover:underline transform py-2 px-3 rounded-md flex items-center gap-2"
              >
                <HiPlay />
                Movies
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/entertainment"
                className="hover:underline transform py-2 px-3 rounded-md flex items-center gap-2"
              >
                <HiOutlineUserGroup />
                Entertainment
              </NavLink>
            </li>
            <li>
              <NavLink
                to={!isAuthenticated ? "/login" : "/account"}
                className="hover:underline transform py-2 px-3 rounded-md flex items-center gap-2 "
              >
                <HiUser />
                My Profile
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="ads"
                className="hover:underline transform py-2 px-3 rounded-md flex items-center gap-2 "
              >
                <PiAddressBook />
                Advertise on africTv
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
      {/* <div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="black"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="currentColor"
            classNameName="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div> */}
    </nav>
  );
}

export default Navigationbar;
