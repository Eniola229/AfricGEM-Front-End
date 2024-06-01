function NewsLetterForm() {
  return (
    <form>
      <div className="flex items-center justify-center gap-3 w-72 mx-auto">
        <input
          type="text"
          className=" py-1 px-3 grow   bg-green-50 outline-none ring-1 ring-yellow-500 text-slate-600"
          placeholder="email@example.com"
        />
        <button className=" bg-yellow-500 py-1 px-3 rounded-sm">
          subscribe
        </button>
      </div>
    </form>
  );
}

export default NewsLetterForm;
