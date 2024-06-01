import { Link } from "react-router-dom";

function Button({
  children,
  disabled,
  to,
  type,
  handler,
  className = "",
  htmlType,
}) {
  const base =
    "tracking-wide outline-none font-semibold my-4  text-sm  text-stone-50 focus:ring focus:ring-yellow-300 focus:ring-offset-1 rounded-full bg-yellow-500  uppercase transition-all  duration-500 hover:opacity-70";
  const styles = {
    primary: base + " px-4 py-3 md:px-5 md:py-4 ",
    small: base + " text-xs outline-none px-4 py-2",
    round: base + " text-xs outline-none px-3 py-2",
    secondary: `tracking-wide outline-none text-sm font-medium focus:ring focus:ring-slate-600 focus:ring-offset-1 px-3 py-2 md:px-3.5 md:py-2.5 text-slate-600 border-2 border-slate-500 rounded-full  uppercase transition-colors  duration-500 hover:bg-slate-200`,
  };
  if (to)
    return (
      <Link to={to} className={`${styles[type]} ${className}`}>
        {children}
      </Link>
    );
  if (handler)
    return (
      <button
        disabled={disabled}
        className={`${styles[type]} ${className}`}
        onClick={handler}
      >
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={`${styles[type]} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
