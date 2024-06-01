import { useUSer } from "../Auth/useUser";
// src="https://i.pravatar.cc/100?u=zz"

function UserAvatar() {
  const { user } = useUSer();
  return (
    <div className="self-center flex  shadow-sm items-center px-3 gap-2">
      <div className="h-12 w-12  rounded-full">
        <img
          src={
            (user?.avatar !== null && user?.avatar) ||
            "/imgs/defaultuser-avater.jpg"
          }
          alt={
            (user?.avatar !== null && `avatar of ${user?.name}`) ||
            "default avatar"
          }
          className="h-full w-full rounded-full object-cover object-center"
        />
      </div>
      {/* <h3 className=" capitalize text-center font-semibold">Friday</h3> */}
    </div>
  );
}

export default UserAvatar;
