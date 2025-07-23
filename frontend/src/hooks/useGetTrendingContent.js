import { useEffect, useState } from "react";
import { useContentStore } from "../store/content";
import axios from "axios";

const useGetTrendingContent = () => {
  const [trendingContent, setTrendingContent] = useState(null);
  const { contentType } = useContentStore();

  useEffect(() => {
    const getTrendingContent = async () => {
      try {
        const res = await axios.get(`/api/v1/${contentType}/trending`);
        console.log(res.data);
        // Wrap in array only if needed
        const result = res.data.content;
        setTrendingContent(Array.isArray(result) ? result[0] : result);
      } catch (error) {
        console.error("Failed fetching trending content:", error);
      }
    };

    getTrendingContent();
  }, [contentType]);

  return { trendingContent };
};

export default useGetTrendingContent;
