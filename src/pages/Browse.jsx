import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import { useSelector } from "react-redux";
import Header from "../layout/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "../layout/MainContainer";
import SecondaryContainer from "../layout/SecondaryContainer";
import GptSearch from "../components/gpt/GptSearch";

function Browse() {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  const showGptSearch = useSelector((store) => store.gpt.isGptPage);
  return (
    <div className="">
      <Header />

      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          {" "}
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
}

export default Browse;
