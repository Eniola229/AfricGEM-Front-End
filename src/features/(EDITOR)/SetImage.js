import { useCallback } from "react";

export function SetImage(editor, url) {
  const addImage = useCallback(() => {
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor, url]);

  if (!editor) {
    return null;
  }
  return addImage;
}
