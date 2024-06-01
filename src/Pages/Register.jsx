// import CreatPostForm from "../features/post/CreatPostForm";

import SignupForm from "../features/Auth/SignupForm";
import { register } from "../services/ApiAuth";
// import CreatPostForm from "../features/post/CreatPostForm";
// import Editor from "../features/post/Lexica";
// import SubscribeForm from "../features/subscription/SubscribeForm";

function Register() {
  return (
    <div className="h-screen bg-slate-100 flex justify-center items-center">
      <div className="lg:w-2/5 md:w-1/2 w-2/3">
        {/* <Editor /> */}
        <SignupForm />
        {/* <SubscribeForm /> */}
      </div>
    </div>
  );
}

export default Register;

// const data = { name: "friyo" };
// register(data);
