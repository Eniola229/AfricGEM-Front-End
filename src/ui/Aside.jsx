// import Adverts from "../features/ADS/Adverts";

function Aside({ children, className = "", position }) {
  const gridColStart =
    position === "start" && position !== "" ? "col-start-1" : "col-start-2";
  return (
    <div
      className={` ${className} ${gridColStart} flex flex-col gap-4 row-span-full`}
    >
      {children}{" "}
    </div>
  );
}

export default Aside;
