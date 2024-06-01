import { Link } from "react-router-dom";

function TrendingList() {
  return (
    <div className="grid grid-cols-[8rem_1fr] gap-2 items-center">
      <div className="h-16  ">
        <img
          src="https://media.istockphoto.com/id/1372188696/photo/bus-with-blank-advertisement-poster.webp?b=1&s=170667a&w=0&k=20&c=7zhsnfR-4ps9r1lWJWH_sJsyeM7NQLeMUeofPAc5yi4="
          alt="fox"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <Link to="/trending:1" className="text-green-500 underline text-lg">
        lost fox returned to the zoo the zoo
      </Link>
    </div>
  );
}

export default TrendingList;
