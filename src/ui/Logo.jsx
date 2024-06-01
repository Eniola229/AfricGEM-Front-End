function Logo({ className }) {
  return (
    <div className={`h-16 w-full ${className}`}>
      <img
        src="/imgs/africgemlogo-nobg.png"
        className={`h-full w-full  ${
          className ? "object-contain" : "object-cover"
        }`}
        alt="africgem-logo"
      />
    </div>
  );
}

export default Logo;
