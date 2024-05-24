import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card.jsx";

const ExploreDetails = () => {
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);

  const params = useParams();

  const fetchTvData = async () => {
    try {
      const res = await axios.get(`/discover/${params.explore}`, {
        params: {
          page: pageNo,
        },
      });

      setData((prev) => {
        return [...prev, ...res.data.results];
      });

      setTotalPageNo(res.data.total_pages);
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
    fetchTvData();
  }, [pageNo]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setPageNo(1);
    setData([]);
    fetchTvData();
  }, [params.explore]);

  return (
    <div className="pt-16">
      <div className="container mx-auto ">
        <h3 className="text-xl lg:text-2xl capitalize my-3 font-semibold">
          Popular {params.explore} show
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {data.map((exploreData, index) => {
            return (
              <Card
                data={exploreData}
                media_type={params.explore}
                key={exploreData.id + "exploreData" + index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExploreDetails;
