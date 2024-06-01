import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/ApiAuth";

export function useUSer() {
  const token = sessionStorage.getItem("currentusertoken");

  const { isLoading, data: user } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getCurrentUser(token),
  });
  return {
    isLoading,
    user: user?.user,
    data: user,
    isAuthenticated: user?.status === true,
  };
}
