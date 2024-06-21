import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CookiesProvider } from "react-cookie";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./Pages/HomePage";
import Page404 from "./Pages/Page404";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import BusinessPage from "./Pages/BusinessPage";
import AppLayout from "./ui/AppLayout";
import EntertainmentPage from "./Pages/EntertainmentPage";
// import RecentTopicPage from "./Pages/RecentTopicPage";
// Educational
import EducationalPage from "./Pages/EducationalPage";
import Post from "./features/blog/BlogPost";
// MOVIE
import MoviePage from "./Pages/MoviePage";
import TrendingMovies from "./features/movie/TrendingMovies";
import LatestMovies from "./features/movie/LatestMovies";
// ACCOUNT
import Account from "./Pages/Profile-Account";
import UpdateProfile from "./Pages/UpdateProfile";
import PopularMovie from "./features/movie/PopularMovie";
import VideoPost from "./features/Video/VideoPost";
import Music from "./features/music/Music";
import BlogPage from "./features/blog/BlogPage";
import CreatPost from "./features/(EDITOR)/CreatPost";

const provider = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        element: <HomePage />,
        index: true,
        path: "/",
      },
      {
        element: <CreatPost />,
        path: "/creat-post",
      },
      {
        element: <EducationalPage />,
        path: "/educational",
        children: [
          {
            index: true,
            element: <Navigate to="blog" />,
          },
          {
            element: <BlogPage />,
            path: "blog",
          },
          {
            element: <Post />,
            path: "/educational/blog/post/:id",
          },
        ],
      },

      {
        element: <Account />,
        path: "/account",
      },
      {
        element: <UpdateProfile />,
        path: "/account/update-profile/:id",
      },
      {
        element: <EntertainmentPage />,
        path: "/entertainment",
        children: [
          {
            index: true,
            element: <Navigate to="video" />,
          },
          {
            element: <VideoPost />,
            path: "video",
          },
          {
            element: <Music />,
            path: "music",
          },
        ],
      },
      {
        element: <MoviePage />,
        path: "/movie",
        children: [
          {
            index: true,
            element: <Navigate to="trending" />,
          },
          {
            element: <TrendingMovies />,
            path: "trending",
          },
          {
            path: "latest",
            element: <LatestMovies />,
          },
          {
            path: "top",
            element: <PopularMovie />,
          },
        ],
      },
      {
        element: <BusinessPage />,
        path: "/business",
      },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
  { element: <Register />, path: "creat-account" },
  { element: <Login />, path: "login" },
]);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer
          autoClose={3000}
          style={{
            width: "400px",
          }}
          hideProgressBar={true}
          position="top-center"
        />
        <RouterProvider router={provider}></RouterProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </CookiesProvider>
  );
}

export default App;
