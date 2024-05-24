import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchDetails from "../hooks/useFetchDetails";
import { useSelector } from "react-redux";
import moment from "moment";
import Divider from "../components/Divider";
import HorizontalScroll from "../components/HorizontalScroll";
import useFetch from "../hooks/useFetch";
import PlayVideo from "../components/PlayVideo";

const DetailsPage = () => {
  const imageURL = useSelector((state) => state.movieFlixData.imageURL);

  const [playVideo, setPlayVideo] = useState(false);
  const [videoId, setVideoId] = useState("");

  const params = useParams();

  const { data } = useFetchDetails(`/${params.explore}/${params.id}`);
  const { data: castData } = useFetchDetails(
    `/${params.explore}/${params.id}/credits`
  );

  const { data: similarData } = useFetch(
    `/${params.explore}/${params.id}/similar`
  );
  const { data: recommendationsData } = useFetch(
    `/${params?.explore}/${params?.id}/recommendations`
  );

  const writer = castData?.crew
    ?.filter((el) => el.job === "Writer")
    .map((el) => el.name)
    .join(", ");

  const duration = (Number(data?.runtime) / 60).toFixed(1).split(".");

  const handlePlayVideo = (data) => {
    setVideoId(data);
    setPlayVideo(true);
  };

  return (
    <div className="">
      <div className="w-full h-full">
        {/* banner div  */}
        <div className="w-full h-[280px] relative hidden lg:block ">
          <div className="h-full w-full">
            {data?.backdrop_path ? (
              <img
                src={imageURL + data?.backdrop_path}
                alt=""
                className="w-full h-full object-cover "
              />
            ) : (
              <div className="bg-neutral-600 text-white h-full w-full flex items-center justify-center">
                <h1 className="text-2xl">Banner Not found</h1>
              </div>
            )}
          </div>
          <div className="absolute top-0 bg-gradient-to-t from-neutral-900/80 to-transparent w-full h-full" />
        </div>

        {/* poster div  */}
        <div className="container mx-auto px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10 ">
          <div className="relative mx-auto lg:-mt-28 lg:mx-0 w-fit  ">
            <img
              src={imageURL + data?.poster_path}
              alt=""
              className="w-60 h-80 object-cover rounded-xl hover:scale-105 cursor-pointer transition-all"
            />

            <button
              onClick={() => handlePlayVideo(data)}
              className="bg-white w-60 h-12 px-4 py-2 rounded text-black mt-4 hover:bg-gradient-to-l from-red-600 to-orange-700 transition-all hover:scale-105 font-bold"
            >
              Play Now
            </button>
          </div>
          <div className="w-full h-full">
            <h1 className="font-bold text-2xl lg:text-4xl drop-shadow-2xl text-white">
              {data?.title || data?.name}
            </h1>
            <h2 className="text-neutral-400">{data?.tagline}</h2>
            <Divider />
            <div className="mt-2 flex gap-4 text-neutral-200">
              <div>Rating: {Number(data?.vote_average).toFixed(1)}+</div>
              <span>|</span>
              <div>Views: {data?.vote_count}</div>
              <span>|</span>

              <div>
                Duration: {duration[0]}hr {duration[1]}m
              </div>
            </div>
            <Divider />

            <div className="mt-4">
              <h1 className="text-white font-bold text-xl">Overview</h1>
              <p className="py-2">{data?.overview}</p>
            </div>

            <Divider />

            <div className="mt-2 flex gap-4 text-neutral-200 text-center">
              <div>Status: {data?.status}</div>
              <span>|</span>
              <div>
                Release Date:{" "}
                {moment(data?.release_date).format("MMMM Do YYYY")}
              </div>

              <span>|</span>

              <div>Revenue: {data?.revenue}</div>
            </div>

            <Divider />

            <div className="mt-3">
              <div>Director: {castData?.crew[0]?.name}</div>
            </div>

            <Divider />

            <div className="mt-3">
              <div>Writer: {writer}</div>
            </div>
            <Divider />

            <div className="mt-3">
              <h1>Cast:</h1>
              <div className="grid grid-cols-[repeat(auto-fit,96px)] gap-3 my-5 justify-center">
                {castData?.cast
                  ?.filter((el) => el.profile_path)
                  .map((actor, index) => {
                    return (
                      <div
                        key={actor.id + "actorCast" + index}
                        className="hover:scale-105 cursor-pointer transition-all"
                      >
                        <div>
                          <img
                            src={imageURL + actor?.profile_path}
                            className="h-24 w-24 object-cover rounded-full"
                          />
                        </div>
                        <p className="font-bold text-center text-sm text-neutral-400 pt-4">
                          {actor?.name}
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <HorizontalScroll
          data={similarData}
          heading={"Similar " + params?.explore}
          media_type={params?.explore}
        />

        <HorizontalScroll
          data={recommendationsData}
          heading={"Recommended " + params?.explore}
          media_type={params?.explore}
        />
      </div>

      {playVideo && (
        <PlayVideo
          data={videoId}
          close={() => setPlayVideo(false)}
          media_type={params?.explore}
        />
      )}
    </div>
  );
};

export default DetailsPage;
