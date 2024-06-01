import Trending from "../blog/Trending";
import AdvertList from "./AdvertList";

function Adverts() {
  return (
    <div className=" space-y-4">
      <AdvertList />
      <Trending />
      <div className=" space-y-4">
        {Array.from({ length: 2 }).map((_, i) => (
          <AdvertList key={i} />
        ))}
      </div>
      <div className="grid   gap-4 grid-rows-2 grid-cols-2">
        <div className="space-y-4">
          <AdvertList className="h-14" />
          <AdvertList className="h-14" />
        </div>
        <AdvertList className="row-start-1  h-full col-start-2 row-end-2" />
      </div>
    </div>
  );
}

export default Adverts;
