import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../slices/movieSlice";
import { OPTIONS } from "../utils/constant";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing",
        OPTIONS
      );

      dispatch(addNowPlayingMovies(response.data));
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!nowPlayingMovies) fetchData();
  }, []);

  return loading;
};

export default useNowPlayingMovies;
