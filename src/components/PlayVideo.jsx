import React from "react";
import { IoClose } from "react-icons/io5";
import useFetch from "../hooks/useFetch.js";

const PlayVideo = ({ data, close, media_type }) => {
  const { data: videoData } = useFetch(`${media_type}/${data?.id}/videos`);
  console.log("data", videoData);
  return (
    <sections className="fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-neutral-700 bg-opacity-50 z-40 flex items-center justify-center">
      <div className="bg-black w-full max-h-[80vh] max-w-screen-lg aspect-video rounded-md overflow-hidden relative">
        <button
          onClick={close}
          className="absolute top-0 right-0 p-2 hover:scale-105 transition-all ease-in-out"
        >
          <IoClose className="text-2xl" />
        </button>

        <iframe
          src={`https://www.youtube.com/embed/${videoData[0]?.key}?controls=1`}
          frameborder="0"
          className="w-full h-full"
          aria-controls=""
        />
      </div>
    </sections>
  );
};

export default PlayVideo;
