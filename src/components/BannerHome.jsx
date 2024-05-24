import { useSelector } from "react-redux";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useEffect, useState } from "react";
import PlayVideo from "./PlayVideo";
import { Link, useParams } from "react-router-dom";

const BannerHome = () => {
  const bannerData = useSelector((state) => state.movieFlixData.bannerData);
  const imageURL = useSelector((state) => state.movieFlixData.imageURL);
  const [currentImage, setCurrentImage] = useState(0);
  const [playVideo, setPlayVideo] = useState(false);
  // const [videoId, setVideoId] = useState("");

  const handlePlayVideo = () => {
    // setVideoId(videoId);
    setPlayVideo(true);
  };

  const handleNext = () => {
    if (currentImage < bannerData.length - 1) {
      setCurrentImage((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (currentImage > 0) {
      setCurrentImage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImage < bannerData.length - 1) {
        handleNext();
      } else {
        currentImage(0);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [bannerData, imageURL, currentImage]);

  return (
    <section className="h-full w-full ">
      <div className="flex min-h-full max-h-[95vh] overflow-hidden ">
        {bannerData.map((data, index) => {
          return (
            <div
              className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative transition-all duration-700 ease-in-out group"
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
              key={data.id + "bannerData" + index}
            >
              <div className="w-full h-full">
                <img
                  src={imageURL + data.backdrop_path}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent" />

              {/* next and previous buttons */}

              <div className="absolute top-0 w-full h-full group-hover:lg:flex items-center justify-between px-4 hidden">
                <button
                  onClick={handlePrev}
                  className="bg-white z-10 text-black p-1 text-xl rounded-full "
                >
                  <GrPrevious />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-white z-10 text-black p-1 text-xl rounded-full "
                >
                  <GrNext />
                </button>
              </div>

              <div className="container mx-auto">
                <div className=" absolute bottom-0 max-w-md px-3">
                  <h1 className="font-bold text-2xl lg:text-4xl drop-shadow-2xl text-white">
                    {data?.title || data?.name}
                  </h1>
                  <p className="text-ellipsis line-clamp-3 my-2">
                    {data.overview}
                  </p>
                  <div className="flex items-center gap-5">
                    <p>Rating: {Number(data.vote_average).toFixed(1)}+</p>
                    <span>|</span>
                    <p>Views: {Number(data.popularity).toFixed(0)}</p>
                  </div>
                  <Link to={"/" + data?.media_type + "/" + data.id}>
                    <button
                      onClick={handlePlayVideo}
                      className="bg-white px-4 py-2 rounded text-black mt-4 hover:bg-gradient-to-l from-red-600 to-orange-700 transition-all hover:scale-105 hover:font-bold"
                    >
                      Play Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {playVideo && <PlayVideo close={() => setPlayVideo(false)} />}
    </section>
  );
};

export default BannerHome;
