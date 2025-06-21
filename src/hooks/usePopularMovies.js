import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovie } from "../utils/movieSlice";
import { OPTIONS } from "../utils/constant";

const usePopularMovies = () => {
  const [loading, setLoading] = useState(false);
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const dispatch = useDispatch();

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        OPTIONS
      );

      dispatch(addPopularMovie(response.data));
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!popularMovies) fetchData();
  }, []);

  return loading;
};

export default usePopularMovies;
