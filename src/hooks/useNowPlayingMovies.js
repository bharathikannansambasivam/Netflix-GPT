import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { OPTIONS } from "../utils/constant";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(OPTIONS);

        dispatch(addNowPlayingMovies(response.data));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
};

export default useNowPlayingMovies;
