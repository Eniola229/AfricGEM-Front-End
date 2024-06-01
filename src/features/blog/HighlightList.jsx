import { Link } from "react-router-dom";

function HighlightList() {
  return (
    <div className="h-96  w-64 relative bg-slate-300">
      <img
        src="https://i.natgeofe.com/k/6496b566-0510-4e92-84e8-7a0cf04aa505/red-fox-portrait_3x4.jpg"
        alt="fox"
        className="w-full h-full"
      />
      <div className="absolute py-2.5 px-2 bg-neutral-950/60 text-slate-50 font-medium bottom-1">
        <h3 className="text-lg">
          lost fox returned to the zoo after a badass moment escaping the zoo
        </h3>
      </div>
      <div className="absolute top-2">
        <div className="flex justify-between items-center gap-12 space-x-8">
          <div>
            <Link
              to="#k"
              className="bg-green-500 rounded-md text-slate-100 py-1 capitalize px-4 font-medium ml-2 hover:opacity-80"
            >
              read
            </Link>
          </div>
          <div className="bg-slate-200 py-0.5 px-4 rounded-full font-medium">
            15 min
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighlightList;
