import AdvertList from "../features/ADS/AdvertList";
import BlogPosts from "../features/blog/BlogPosts";

function RecentTopicPage() {
  return (
    <div>
      {" "}
      <div className="w-4/5 mx-auto">
        <AdvertList />
        <h3 className="head text-center">latest</h3>
        {Array.from({ length: 5 }).map((_, i) => (
          <BlogPosts key={i} />
        ))}
        <AdvertList />
        {Array.from({ length: 2 }).map((_, i) => (
          <BlogPosts key={i} />
        ))}
      </div>
    </div>
  );
}

export default RecentTopicPage;
