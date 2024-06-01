import { useMutation } from "@tanstack/react-query";
import { updateUSerData } from "../../services/apiUser";
import { toast } from "react-toastify";

export function useUpdateUserData() {
  const { isPending: isLoading, mutate: updateProfileData } = useMutation({
    mutationFn: ({ id, data }) => updateUSerData({ id, data }),
    onSuccess: (data) => {
      console.log(data);
      toast.success("profile updated successfully");
    },
    onError: (err) => {
      toast.error(err?.message, { autoClose: 7000 });
    },
  });
  return { isLoading, updateProfileData };
}
