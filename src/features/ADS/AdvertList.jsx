const defaultImg =
  "https://www.wordstream.com/wp-content/uploads/2021/07/persuasive-ads-coca-cola-1.jpg";

function AdvertList({
  className,
  imgGif = defaultImg,
  adsMethod = "image",
  vid,
}) {
  return (
    <div className={`h-48 w-full ${className}`}>
      {adsMethod === "image" ? (
        <img
          alt="ads"
          src={imgGif}
          className=" h-full w-full object-cover object-center  rounded-[inherit]"
        />
      ) : (
        <video
          src={vid}
          className=" h-full w-full object-cover object-center  rounded-[inherit]"
        />
      )}
    </div>
  );
}

export default AdvertList;
