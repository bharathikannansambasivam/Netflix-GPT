import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { OPTIONS } from "../utils/constant";

const useTopRatedMovies = () => {
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        " https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        OPTIONS
      );

      dispatch(addTopRatedMovies(response.data));
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!topRatedMovies) fetchData();
  }, []);
};

export default useTopRatedMovies;
