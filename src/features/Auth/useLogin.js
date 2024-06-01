import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/ApiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { useSessionStorage } from "../../hooks/useSessionStorage";

export function useLogin() {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies();
  const [sessionKeyVal, setSessionKeyVal] = useState({ key: "", value: "" });
  const { session } = useSessionStorage(sessionKeyVal.key, sessionKeyVal.value);
  const { isPending: isLoading, mutate: login } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      console.log(data);
      toast.success(data.message, { autoClose: 2000 });
      navigate("/", { replace: true });
      setCookies("currentuser", data?.access_token, [data?.user.name]);

      sessionStorage.setItem("currentusertoken", data?.access_token);
      setSessionKeyVal((session) => {
        return {
          ...session,
          key: "currentusertoken",
          value: data?.access_token,
        };
      });
      // console.log(session);
    },
    onError: (error) => {
      toast.error(
        error.message || "the email or password provided is incorrect",
        {
          autoClose: 7000,
          position: "top-center",
        }
      );
    },
  });
  return { isLoading, login, cookies };
}
