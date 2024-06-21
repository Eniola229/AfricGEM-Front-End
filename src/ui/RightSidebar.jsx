import AdvertList from "../features/ADS/AdvertList";
import Latest from "../features/blog/Latest";

function RightSidebar({ render, children }) {
  const isEductaion = render?.pathname.includes("/educational/blog");

  return (
    <aside className=" bg-slate-50 border mr-8 flex flex-col gap-3 overflow-y-auto">
      {/* <AdvertList /> */}
      {children}
      {isEductaion && <Latest />}
    </aside>
  );
}

export default RightSidebar;
