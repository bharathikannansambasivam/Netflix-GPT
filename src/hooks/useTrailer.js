import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { OPTIONS } from "../utils/constant";

import { addMovieTrailer } from "../slices/movieSlice";
const useTrailer = (movieId) => {
  const movieTrailer = useSelector((store) => store.movies.movieTrailer);
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

    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    if (!movieTrailer) fetchVideoTrailer();
  }, []);
};

export default useTrailer;
