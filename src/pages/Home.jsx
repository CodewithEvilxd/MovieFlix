import { useSelector } from "react-redux";
import BannerHome from "../components/BannerHome";
import HorizontalScroll from "../components/HorizontalScroll";
import useFetch from "../hooks/useFetch.js";
const Home = () => {
  const trendingData = useSelector((state) => state.movieFlixData.bannerData);

  const { data: nowPlaying } = useFetch("/movie/now_playing");
  const { data: topRated } = useFetch("/movie/top_rated");
  const { data: popular } = useFetch("/movie/popular");
  const { data: tvShowsData } = useFetch("/discover/tv");
  const { data: onTheAirData } = useFetch("/tv/on_the_air");

  return (
    <div>
      <BannerHome />
      <HorizontalScroll
        data={trendingData}
        heading={"Trending"}
        trending={true}
      />
      <HorizontalScroll
        data={nowPlaying}
        heading={"Now Playing"}
        trending={false}
        media_type={"movie"}
      />
      <HorizontalScroll
        data={topRated}
        heading={"Top Rated Movies"}
        trending={false}
        media_type={"movie"}
      />
      <HorizontalScroll
        data={popular}
        heading={"Popular TV Shows"}
        trending={false}
        media_type={"tv"}
      />
      <HorizontalScroll
        data={tvShowsData}
        heading={"TV Shows"}
        trending={false}
        media_type={"tv"}
      />
      <HorizontalScroll data={onTheAirData} heading={"On the Air"} />
    </div>
  );
};

export default Home;
