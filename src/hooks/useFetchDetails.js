import { useEffect, useState } from "react";
import axios from "axios";

const useFetchDetails = (endpoint) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(endpoint);
      setLoading(false);
      setData(res.data);
    } catch (error) {
      console.log("Error related ot playing data on home.jsx", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return { data, loading };
};

export default useFetchDetails;
