import { useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";

function MiniHeader({
  children,
  titles,
  className,
  filter = ["trending", "latest", "top"],
}) {
  const activeMiniPage = useLocation();

  const navigate = useNavigate();

  return (
    <div className={`${className} sticky top-0 bg-slate-100 z-50 py-2`}>
      <div className="flex  justify-between">
        <div
          className={`flex gap-3 ${titles ? "gap-6 " : ""} ${
            titles?.[0]?.class ? "gap-12 ml-7" : ""
          } text-xl font-medium`}
        >
          {!titles ? (
            <>
              {filter.map((el) => {
                const isActive = activeMiniPage?.pathname.includes(el);
                console.log(isActive);
                return (
                  <Button
                    className={`${
                      isActive ? "border-b-2 border-b-green-500" : ""
                    } capitalize`}
                    key={el}
                    handler={() => navigate(`${el}`)}
                  >
                    {el}
                  </Button>
                );
              })}
            </>
          ) : (
            titles.map((el) => {
              const isActive = activeMiniPage?.pathname.includes(`${el.title}`);

              return (
                <Button
                  className={`${el?.class} text-lg ${
                    isActive ? "border-b-2 border-b-green-500" : ""
                  }  flex items-center gap-2`}
                  key={el.title}
                  handler={() => navigate(`${el.title}`)}
                >
                  {el.icon} {el.title}
                </Button>
              );
            })
          )}
        </div>
        <div className="flex items-end gap-3">{children}</div>
      </div>
    </div>
  );
}

export default MiniHeader;
