import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackGround";

function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;
  const randomMovie = Math.floor(Math.random() * 5) + 1;
  const mainMovie = movies.results[randomMovie]
    ? movies.results[randomMovie]
    : movies.results[0];
  console.log(mainMovie);
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackGround movieId={id} />
    </div>
  );
}

export default MainContainer;
