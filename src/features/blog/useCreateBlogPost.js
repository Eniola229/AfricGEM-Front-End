import { useMutation } from "@tanstack/react-query";
import { uploadPost as uploadBlogPost } from "../../services/apiPost";

export function useCreateBlogPost() {
  const { isPending: isPosting, mutate: creatBlogPost } = useMutation({
    mutationFn: uploadBlogPost,
    onSuccess: () => {
      alert("POSTED");
    },
  });
  return { isPosting, creatBlogPost };
}
