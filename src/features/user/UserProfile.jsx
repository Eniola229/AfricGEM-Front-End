import { useNavigate } from "react-router-dom";
import { useUSer } from "../Auth/useUser";
import { HiArrowLeft, HiCheck, HiLink } from "react-icons/hi";
import { HiCalendarDays } from "react-icons/hi2";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

import Button from "../../ui/Button";
import MiniHeader from "../../ui/MiniHeader";
import VideoPostCard from "../Video/VideoPostCard";
import PostCard from "../post/PostCard";
import { getMonth } from "../../utils/helpers";

function UserProfile() {
  const navigate = useNavigate();
  const { user = {} } = useUSer();
  console.log(user);
  const {
    avatar,
    created_at,
    name: fullName,
    subscribers_number: subcribers,
    unique_id: userName,
    verification_status: isVerify,
    id,
  } = user;
  const joinDate = new Date(created_at);
  return (
    <div class="flex bg-inherit">
      <section class="w-full relative bg-inherit">
        <div>
          <div class="flex justify-between bg-slate-50 items-center">
            <div class="px-4 py-2">
              <Button
                className=" text-2xl font-medium rounded-full text-yellow-500 hover:bg-yellow-100  float-right"
                handler={() => navigate(-1)}
              >
                <HiArrowLeft class="m-2 h-6 w-6" />
              </Button>
            </div>
            <div class="mx-2">
              <p class="mb-0  text-lg font-medium text-gray-600">935K post</p>
            </div>
          </div>
        </div>

        {/* <!-- User card--> */}
        <div>
          <div
            class="w-full bg-cover bg-no-repeat bg-center bg-yellow-500"
            style={{
              height: "200px",
              backgroundImage:
                "url(https://pbs.twimg.com/profile_banners/2161323234/1585151401/600x200)",
            }}
          >
            <img
              class="opacity-0 w-full h-full"
              src={
                "https://pbs.twimg.com/profile_banners/2161323234/1585151401/600x200"
              }
              alt=""
            />
          </div>
          {/* <!-- Avatar --> */}
          <div class="absolute top-48 ml-3">
            <div class="w-36 h-36  relative ">
              <img
                class="md rounded-full relative border-2 border-yellow-500 h-full w-full"
                src={
                  (avatar !== null && avatar) || "/imgs/defaultuser-avater.jpg"
                }
                alt={
                  (avatar !== null && `avatar of ${fullName}`) ||
                  `default user avatar for ${fullName}`
                } // src="https://images.unsplash.com/photo-1617077644557-64be144aa306?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              />
            </div>
          </div>
          <div class="p-4">
            {/* <!-- Follow Button --> */}
            <div>
              <div class="flex flex-col text-right">
                <Button
                  className=" justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring   max-w-max border bg-transparent border-yellow-500 text-yellow-500 hover:border-yellow-800  flex items-center hover:shadow-lg font-bold py-2 px-4 rounded-full mr-0 ml-auto"
                  handler={() => navigate(`/account/update-profile/${id}`)}
                >
                  Edit Profile
                </Button>
              </div>
            </div>

            {/* <!-- Profile info --> */}
            <div class="space-y-1  w-full mt-8 ml-3">
              <div>
                <h2 class="text-xl leading-6 font-bold  capitalize flex gap-2 items-center">
                  {/* sofia müller{" "} */}
                  {fullName}{" "}
                  <IoCheckmarkDoneCircleSharp className=" fill-yellow-500" />
                </h2>
                <p class="text-sm leading-5 font-medium text-gray-600">
                  {/* @safeya_101 */}
                  {userName}
                </p>
              </div>
              {/* <!-- Description and others --> */}
              <div class="mt-3">
                <p class="leading-tight mb-2 w-4/5">
                  Dynamic and detail-oriented frontend developer with 5+ years
                  of experience crafting responsive, user-friendly websites and
                  applications.{" "}
                </p>
                <div class="text-gray-600 flex">
                  <span class="flex mr-2">
                    <HiLink className="h-5 w-5 " />
                    <a
                      href="https://AfricGEM.com"
                      target="#"
                      class="leading-5 ml-1 text-yellow-500"
                    >
                      www.AfricGEM.com
                    </a>
                  </span>
                  <span class="flex mr-2">
                    <HiCalendarDays class="h-5 w-5" />
                    <span class="leading-5 ml-1 capitalize">
                      Member Since {getMonth(joinDate.getMonth())},
                      {joinDate.getFullYear()}
                    </span>
                  </span>
                </div>
              </div>
              <div class="pt-3 flex justify-start items-start w-full divide-x divide-current divide-solid">
                <div class="text-center pr-3">
                  <span class="font-bold ">520 </span>
                  <span class="text-gray-600"> subcribing</span>
                </div>
                <div class="text-center px-3">
                  <span class="font-bold ">23.4m </span>
                  <span class="text-gray-600"> subscribers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="border-gray-200" />
        <MiniHeader
          className="bg-slate-50"
          titles={[
            {
              title: "posts",
              icon: "",
              class:
                "text-sm font-normal capitalize border-b-4 border-b-yellow-500",
            },
            {
              title: "Media",
              icon: "",
              class: "text-sm font-normal capitalize",
            },
            {
              title: "Downloads",
              icon: "",
              class: "text-sm font-normal capitalize",
            },
            {
              title: "Likes",
              icon: "",
              class: "text-sm font-normal capitalize",
            },
            {
              title: "Bookmark",
              icon: "",
              class: "text-sm font-normal capitalize",
            },
          ]}
        />
        <ul class="list-none">
          <VideoPostCard />
          <PostCard />
        </ul>
      </section>
    </div>
  );
}

export default UserProfile;
