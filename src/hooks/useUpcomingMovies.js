import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../slices/movieSlice";
import { OPTIONS } from "../utils/constant";

const useUpcomingMovies = () => {
  const upComingMovies = useSelector((state) => state.movies.upcomingMovies);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        OPTIONS
      );

      dispatch(addUpcomingMovies(response.data));
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    if (!upComingMovies) fetchData();
  }, []);
};

export default useUpcomingMovies;
