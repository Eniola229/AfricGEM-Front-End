function SearchInput() {
  return (
    <form action="#" className=" self-center">
      <input
        type="text"
        placeholder="search...."
        className="py-1 focus:w-96 w-80 rounded-md  transition-all duration-500 bg-slate-200 focus:bg-slate-50 px-4  focus:ring-1 focus:ring-offset-2 focus:ring-brandprimary outline-none"
        id="search"
      />
    </form>
  );
}

export default SearchInput;
