import LoginForm from "../features/Auth/LoginForm";

function Login() {
  return (
    <div className="h-screen bg-slate-100 flex justify-center items-center">
      <div className="lg:w-2/5 md:w-1/2 w-2/3">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
