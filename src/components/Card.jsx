import { useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

const Card = ({ data, index, trending, media_type }) => {
  const imageURL = useSelector((state) => state.movieFlixData.imageURL);

  const mediaType = data.media_type ?? media_type;
  return (
    <Link
      to={"/" + mediaType + "/" + data.id}
      className="w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden block rounded cursor-pointer hover:scale-105 transition-all  relative"
    >
      {data?.poster_path ? (
        <img src={imageURL + data?.poster_path} alt="" />
      ) : (
        <div className="bg-neutral-700 h-full w-full flex items-center justify-center text-white">
          Poster not found
        </div>
      )}

      <div className="absolute top-4">
        {trending && (
          <p className="py-1 px-2 bg-black/60 backdrop-blur-3xl rounded-r-full overflow-hidden">
            #{index} Trending
          </p>
        )}
      </div>
      <div className="absolute bottom-0 bg-black/60 backdrop-blur-3xl w-full h-16 p-2">
        <h1 className="text-ellipsis line-clamp-1 text-lg font-semibold">
          {data?.name || data?.title}
        </h1>
        <div className="text-sm text-neutral-400 flex justify-between items-center">
          <p>{moment(data?.release_date).format("MMMM Do YYYY")}</p>
          <p className="bg-black text-white p-1 rounded-full">
            Rating: {Number(data?.vote_average).toFixed(1)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
