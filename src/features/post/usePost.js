import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../services/apiPost";

export function usePost() {
  const { isLoading, data: posts = [] } = useQuery({
    queryKey: ["blogpost"],
    queryFn: getPosts,
  });
  return { isLoading, posts };
}
