import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

function AppLayout() {
  const urlLocation = useLocation();
  //Check page url
  const isMoviePage = urlLocation?.pathname.includes("/movie");
  const isProfilePage = urlLocation?.pathname.includes("/account");

  return (
    <div className="grid gap-3  grid-cols-[15rem_25rem_1fr_25rem] bg-slate-100 grid-rows-auto h-screen">
      {!isProfilePage && <Header />}
      <LeftSidebar />
      <Main className={`${isMoviePage ? "col-span-3 w-[90%]" : ""} h-full`}>
        <Outlet />
      </Main>
      {!isMoviePage && <RightSidebar render={""} />}
    </div>
  );
}

export default AppLayout;
