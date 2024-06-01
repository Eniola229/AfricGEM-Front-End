import { useMutation } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/ApiAuth";

export function useLogout() {
  const { isPending, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      alert("logout");
    },
  });
  return { isPending, logout };
}
