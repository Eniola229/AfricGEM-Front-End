import { useCallback } from "react";
import { validateURL } from "../../utils/helpers";

export function SetUrlLink(editor) {
  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href;
    // console.log(previousUrl);
    let url = window.prompt(
      "input or paste URL , make sure its valid",
      previousUrl
    );
    let isValid = validateURL(url);
  
    // cancelled if url is not valid
    if (!isValid) {
      return (url = window.prompt("Pls enter a valid URL", previousUrl));
      //   if (url !== null && validateURL(url) === true) {
      //     return (isValid = validateURL(url));
      //   } else {
      //     return (url = window.prompt("Pls enter a valid URL")), previousUrl;
      //   }
    }
    // cancelled
    if (url === null && !isValid) {
      return;
    }

    // empty
    if (url === "" && !isValid) {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);
  return setLink;
}
