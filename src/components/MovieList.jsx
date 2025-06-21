import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";

function MovieList({ title, movies }) {
  return (
    <div className="">
      {movies && (
        <div>
          <h1 className="font-bold text-3xl py-5 ml-6 text-white">{title}</h1>
          <div className="flex">
            <div className="flex scrollbar-hidden overflow-x-scroll gap-5">
              {movies?.map((movie) => (
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
