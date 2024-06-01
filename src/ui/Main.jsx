function Main({ children, className }) {
  return (
    <main
      className={`text-neutral-600 overflow-x-hidden scrollbar  sxr col-span-2  ml-28 w-10/12 ${className} relative `}
    >
      <div>{children}</div>
      <div className="relative ">{/* <Footer /> */}</div>
    </main>
  );
}

export default Main;
