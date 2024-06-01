import VideoPostCard from "./VideoPostCard";

function VideoPost() {
  return (
    <>
      {Array.from({ length: 7 }).map((_, i) => (
        <VideoPostCard key={i} />
      ))}
    </>
  );
}

export default VideoPost;
