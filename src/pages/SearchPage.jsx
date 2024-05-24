import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";

const SearchPage = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const navigate = useNavigate();

  const query = location?.search?.slice(3);
  const fetchTvData = async () => {
    try {
      const res = await axios.get(`/search/multi`, {
        params: {
          query: location?.search?.slice(3),
          page: pageNo,
        },
      });

      setData((prev) => {
        return [...prev, ...res.data.results];
      });
    } catch (error) {
      console.log("Error in explore details in API for Tv Data", error);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageNo((prev) => prev + 1);
    }
  };
  useEffect(() => {
    if (query) {
      setPageNo(1);
      setData([]);
      fetchTvData();
    }
  }, [location?.search]);

  useEffect(() => {
    if (query) {
      fetchTvData();
    }
  }, [pageNo]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="py-16">
      <div className="lg:hidden flex items-center justify-center sticky top-[70px] z-30">
        <input
          type="text"
          placeholder="search here..."
          onChange={(e) => navigate(`/search?q=${e.target.value}`)}
          value={query?.split("%20")?.join(" ")}
          className="bg-white text-black rounded-2xl w-full mx-4 outline-none border border-neutral-500 px-3 py-2 my-3"
        />
      </div>
      <div className="container mx-auto ">
        <h3 className="text-xl lg:text-2xl capitalize my-3 font-semibold">
          Search Result
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {data.map((searchData, index) => {
            return (
              <Card
                key={searchData.id + "SearchData" + index}
                data={searchData}
                media_type={searchData.media_type}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
