import Navigationbar from "./Navigationbar";

function LeftSidebar({ logo }) {
  return (
    <aside className=" bg-slate-50 ml-8 w-[120%] overflow-y-auto">
      <Navigationbar />
    </aside>
  );
}

export default LeftSidebar;
