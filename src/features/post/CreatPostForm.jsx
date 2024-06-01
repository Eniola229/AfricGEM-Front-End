import React, { useEffect, useState } from "react";

/*
 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddList = () => {
    setFormData({
      ...formData,
      content: formData.content + "\n- ",
    });
  };

  const handleBold = () => {
    setFormData({
      ...formData,
      content: formData.content + "<b></b>",
    });
  };

  const handleItalic = () => {
    setFormData({
      ...formData,
      content: formData.content + "<i></i>",
    });
  };

  const handleUnderline = () => {
    setFormData({
      ...formData,
      content: formData.content + "<u></u>",
    });
  };

  const handleStrikeThrough = () => {
    setFormData({
      ...formData,
      content: formData.content + "<s></s>",
    });
  };

  const handleAddLink = () => {
    setFormData({
      ...formData,
      content: formData.content + "<a href=''></a>",
    });
  };

  const handleColorChange = (color) => {
    setFormData({
      ...formData,
      content: formData.content + `<span style='color:${color};'></span>`,
    });
  }; */
function CreatPostForm() {
  const [El, setEl] = useState(["p"]);
  const [formData, setFormData] = useState({ content: "" });
  useEffect(() => {
    const el = document.createElement(El[0]);
    console.log(el);
    const elp = document.querySelector(el);
    console.log(elp);
  }, []);
  const handleChange = function (value) {
    console.log(value);
    setFormData({ ...formData, content: value });
  };
  console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Create a New Blog Post</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-sm font-semibold mb-2"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={(e) => handleChange(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              rows={10}
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              //   onClick={handleAddList}
              className="bg-green-500 hover:bg-green-600 text-green-50 font-semibold py-2 px-4 rounded mr-2"
            >
              Add List
            </button>
            <button
              type="button"
              //   onClick={handleBold}
              className="bg-green-500 hover:bg-green-600 text-green-50 font-semibold py-2 px-4 rounded mr-2"
            >
              Bold
            </button>
            <button
              type="button"
              //   onClick={handleItalic}
              className="bg-green-500 hover:bg-green-600 text-green-50 font-semibold py-2 px-4 rounded mr-2"
            >
              Italic
            </button>
            <button
              type="button"
              //   onClick={handleUnderline}
              className="bg-green-500 hover:bg-green-600 text-green-50 font-semibold py-2 px-4 rounded mr-2"
            >
              Underline
            </button>
            <button
              type="button"
              className="bg-green-500 hover:bg-green-600 text-green-50 font-semibold py-2 px-4 rounded mr-2"
              //   onClick={handleStrikeThrough}
            >
              Strike Through
            </button>
            <button
              type="button"
              //   onClick={handleAddLink}
              className="bg-green-500 hover:bg-green-600 text-green-50 font-semibold py-2 px-4 rounded mr-2"
            >
              Add Link
            </button>
            <button
              type="button"
              //   onClick={handleColorChange}
              className="bg-green-500 hover:bg-green-600 text-green-50 font-semibold py-2 px-4 rounded mr-2"
            >
              Change Color
            </button>
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-green-50 font-semibold py-2 px-4 rounded mt-4"
          >
            Publish Post
          </button>
        </form>
        {formData && El.map((el) => `<${el}>${formData.content}</${el}>`)}
      </div>
    </div>
  );
}

export default CreatPostForm;
