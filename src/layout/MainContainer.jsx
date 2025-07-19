import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "../components/VideoTitle";
import VideoBackGround from "../components/VideoBackGround";

function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies.results[1];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="flex justify-center items-center">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackGround movieId={id} />
    </div>
  );
}

export default MainContainer;
