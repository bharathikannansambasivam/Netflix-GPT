import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { OPTIONS } from "../utils/constant";

import { addMovieTrailer } from "../utils/movieSlice";
const useTrailer = (movieId) => {
  const dispatch = useDispatch();
  const fetchVideoTrailer = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      OPTIONS
    );

    const filterData = response.data.results.filter(
      (video) => video.type == "Trailer"
    );
    const trailer = filterData.length
      ? filterData[0]
      : response.data.results[0];
    console.log(trailer);

    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    fetchVideoTrailer();
  }, []);
};

export default useTrailer;
