import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

function Page404() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen bg-gray-50 flex items-center">
      <div className="container flex flex-col items-center justify-center px-5 text-gray-700">
        <div className="mx-5 my-12 h-96">
          {/* <a href="https://storyset.com/internet">Internet illustrations by Storyset</a> */}
          <img
            src="/Oops! 404 Error with a broken robot-bro.svg"
            className="h-full"
            alt="Page not found"
          />
        </div>
        <div className="flex justify-center flex-col items-center">
          {/* <div className="text-7xl text-yellow-500 font-dark font-extrabold mb-8">
            {" "}
            404
          </div> */}
          <p className="text-2xl md:text-3xl font-light leading-normal mb-4">
            Sorry we couldn't find the page you're looking for
          </p>

          <Button
            type="primary"
            className=" rounded-md active:bg-yellow-600 hover:bg-yellow-700"
            handler={() => navigate(-1, { replace: true })}
          >
            go back
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page404;
