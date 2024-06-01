import { useMutation, useQueryClient } from "@tanstack/react-query";
import { register } from "../../services/ApiAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function useCreatAccount() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isPending: isLoading, mutate: creatAccount } = useMutation({
    mutationFn: (data) => register(data),
    mutationKey: ["creataccount"],
    onSuccess: () => {
      toast.success("acount created successfully");
      queryClient.invalidateQueries();
      navigate("/login", { replace: true });
    },
    onError: (err) => {
      toast.error(err.message, {
        autoClose: 7000,
        position: "top-center",
      });
    },
  });
  return { creatAccount, isLoading };
}
