import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";

function MovieList({ title, movies }) {
  const moviePoster = movies?.filter((movie) => movie?.poster_path);
  if (!moviePoster || moviePoster.length === 0) return null;

  return (
    <div className=" ">
      {moviePoster && (
        <div>
          <h1 className="  font-bold text-3xl py-5  text-white">{title}</h1>
          <div className="flex">
            <div className="flex scrollbar-hidden overflow-x-scroll gap-5">
              {moviePoster?.map((movie) => (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  poster={movie?.poster_path}
                  title={movie?.title}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieList;
