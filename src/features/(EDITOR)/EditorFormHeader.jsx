function EditorFormHeader({ sync, error }) {
  return (
    <div className=" bg-white w-full rounded-lg py-4 px-4">
      <div>
        <input
          type="text"
          placeholder="New post title here"
          className="block  mt-2 w-full placeholder-gray-400/70 text-xl font-bold dark:placeholder-gray-500 placeholder:font-bold  border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-green-300 placeholder:text-xl"
          {...sync("post_title", {
            required: "blog post must have a title",
            minLength: {
              value: 15,
              message: "title length need to be longer",
            },
          })}
        />
        <p className="text-red-600 text-xs capitalize mt-2">
          {error?.post_title?.message}
        </p>
      </div>
      <div>
        <input
          type="text"
          placeholder="add some #tag"
          className="block  w-full mt-2  placeholder-gray-400/70 dark:placeholder-gray-500   border-b border-b-gray-200 px-5 py-2.5 text-gray-700  focus:outline-none  dark:border-b-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-b-green-300 placeholder:text-xs"
          {...sync("hashtags", {
            required:
              "add 1-3 or more #tag to help your post get to more people",
          })}
        />
        <p className="text-red-600 text-xs capitalize mt-2">
          {error?.hashtags?.message}
        </p>
      </div>
      <div className="ml-auto w-40 my-6">
        <label
          htmlFor="select-cover"
          className=" cursor-pointer bg-white shadow-md w-40 ml-auto  py-3 px-4 border"
        >
          Add cover Image
        </label>
        <input type="file" hidden id="select-cover" />
      </div>
      {/* <pre>{JSON.stringify(editor.getJSON(), null, 2)}</pre> */}
    </div>
  );
}

// #bola #africtv #friyo #praise #martins #grace
export default EditorFormHeader;
