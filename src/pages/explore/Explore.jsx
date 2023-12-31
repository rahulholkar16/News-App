import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import Carousel from "../../component/carousel/Carousel";

const Explore = () => {
  const { query } = useParams();
  const { data, loading } = useFetch(`everything?${query}`);

  const DATA = data?.articles.filter((item) => item?.urlToImage != null);

  return (
    <>
      <Carousel data={DATA} loading={loading} />
    </>
  );
};

export default Explore;
