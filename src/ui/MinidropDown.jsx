import { HiOutlineDotsVertical } from "react-icons/hi";
import Button from "./Button";
import { createContext, useContext, useState } from "react";
const MenusContext = createContext();

function MinidropDown({ children }) {
  const [openID, setOpenID] = useState("");
  const close = () => setOpenID("");
  const open = setOpenID;
  return (
    <MenusContext.Provider value={{ openID, close, open }}>
      <div className=" relative">{children}</div>
    </MenusContext.Provider>
  );
}
function ToggleButton({ menuID, title }) {
  const { openID, open, close } = useContext(MenusContext);
  function handleClick() {
    openID === "" || openID !== menuID ? open(menuID) : close();
  }
  return (
    <Button handler={handleClick}>
      {!title ? <HiOutlineDotsVertical /> : title}
    </Button>
  );
}
function MenuList({ children }) {
  return <li class="font-medium">{children}</li>;
}
function MenuItem({ children, className, menuID }) {
  const { openID } = useContext(MenusContext);
  if (openID !== menuID) return null;

  return (
    <div class="absolute w-60 px-5 py-3 dark:bg-gray-800 bg-white rounded-lg shadow border dark:border-transparent mt-3 z-50 -top-20  -left-52 ">
      <ul
        class={` ${className} space-y-3 dark:text-white flex gap-4 items-center `}
      >
        {children}
      </ul>
    </div>
  );
}
MinidropDown.ToggleButton = ToggleButton;
MinidropDown.MenuItem = MenuItem;
MinidropDown.MenuList = MenuList;

export default MinidropDown;
