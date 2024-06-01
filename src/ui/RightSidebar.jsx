import AdvertList from "../features/ADS/AdvertList";

function RightSidebar({ render, children }) {
  return (
    <aside className=" bg-slate-50 border mr-8 flex flex-col gap-3 overflow-y-auto">
      <AdvertList />
      {render}
      {children}
    </aside>
  );
}

export default RightSidebar;
