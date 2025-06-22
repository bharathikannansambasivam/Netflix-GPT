import React, { useState } from "react";
import { useSelector } from "react-redux";
import MovieList from "../MovieList";

function GptMovieSuggestions() {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="px-6 py-4 relative h-full">
      {movieNames.map((movieName, index) => (
        <>
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        </>
      ))}
    </div>
  );
}

export default GptMovieSuggestions;
