import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { OPTIONS } from "../utils/constant";
import { addMovieTrailer } from "../slices/movieSlice";

const useTrailer = (movieId) => {
  const movieTrailer = useSelector((store) => store.movies.movieTrailer);

  const dispatch = useDispatch();

  const fetchVideoTrailer = async () => {
    try {
      console.log("Movie ID:", movieId);

      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        OPTIONS
      );

      console.log(response.data);

      const filterData = response.data.results.filter(
        (video) => video.type === "Trailer"
      );

      const trailer =
        filterData.length > 0 ? filterData[0] : response.data.results[0];

      if (!trailer) return;

      dispatch(addMovieTrailer(trailer));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!movieId) return;

    if (!movieTrailer) {
      fetchVideoTrailer();
    }
  }, [movieId]);
};

export default useTrailer;
