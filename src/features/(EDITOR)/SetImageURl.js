import { useCallback } from "react";
import { validateURL } from "../../utils/helpers";

export function SetImageLink(editor) {
  const addImageURL = useCallback(() => {
    let url = window.prompt("paste the image link ,make sure it is valid");
    let alt = window.prompt("write a little decription about the image");
    let isValid = validateURL(url);
    if (!isValid) return (url = window.prompt("Pls enter a valid image URL"));
    if (url && alt !== "") {
      editor.chain().focus().setImage({ src: url, alt: alt }).run();
    }
  }, [editor]);

  if (!editor) {
    return null;
  }
  return addImageURL;
}
