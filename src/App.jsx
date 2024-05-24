import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MobileNavigation from "./components/MobileNavigation.jsx";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setBannerData, setImageURL } from "./store/movieFlixSlice.js";

const App = () => {
  const dispatch = useDispatch();

  const fetchTrendingData = async () => {
    try {
      const response = await axios.get("/trending/all/week");
      dispatch(setBannerData(response.data.results));
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchConfiguraion = async () => {
    try {
      const response = await axios.get("/configuration");
      dispatch(setImageURL(response.data.images.secure_base_url + "original"));
    } catch (error) {
      console.log("Configure error", error);
    }
  };

  useEffect(() => {
    fetchTrendingData();
    fetchConfiguraion();
  }, []);
  return (
    <main className="pb-14 lg:pb-0">
      <Header />
      <div className="min-h-[90vh]">
        <Outlet />
      </div>
      <Footer />
      <MobileNavigation />
    </main>
  );
};

export default App;
