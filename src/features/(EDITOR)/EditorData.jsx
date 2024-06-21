import { useState } from "react";

function EditorData({ editor, register }) {
  const [editorJson] = useState({ postBodyJson: editor?.getJSON() });
  return (
    <>
      <textarea
        type="text"
        hidden
        required
        value={editor?.getText()}
        {...register("postBodytext", {
          required: "required",
        })}
      />
      <textarea
        type="text"
        hidden
        required
        value={editor?.getHTML()}
        {...register("postBodyHtml", {
          required: "required",
        })}
      />
      <textarea
        type="text"
        hidden
        required
        value={editorJson.postBodyJson}
        {...register("postBodyJson", {
          required: "required",
        })}
      />
      {/* <select {...register("select")} value={editorJson.postBodyJson}>
        <option value={editorJson.postBodyJson}></option>
      </select>{" "} */}
    </>
  );
}

export default EditorData;
