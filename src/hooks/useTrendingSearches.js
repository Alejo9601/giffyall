import { useEffect, useState } from "react";
import consumeTrendingSearches from "../services/consumeTrendingSearches";

const useTrendingSearches = () => {
  const [trendingSearches, setTrendingSearches] = useState([]);

  const getTrendingSearches = () => {
    consumeTrendingSearches().then((res) => {
      const { data } = res;
      setTrendingSearches(data);
    });
  };

  useEffect(() => {
    getTrendingSearches();
    return () => {
      setTrendingSearches([]);
    };
  }, []);

  return { trendingSearches, getTrendingSearches };
};

export default useTrendingSearches;
