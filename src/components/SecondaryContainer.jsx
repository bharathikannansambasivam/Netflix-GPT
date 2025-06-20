import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import usePopularMovies from "../hooks/usePopularMovies";

function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);
  const isLoading = usePopularMovies();
  return (
    movies && (
      <div className="bg-black ">
        <div className="-mt-32 relative ">
          <MovieList
            title="Now Playing"
            movies={movies?.nowPlayingMovies?.results}
          />
          <MovieList
            title="Upcoming Movies"
            movies={movies?.upcomingMovies?.results}
          />
          <MovieList
            title="Top Rated Movies"
            movies={movies?.topRatedMovies?.results}
          />

          {isLoading ? (
            <div className="loader"></div>
          ) : (
            <MovieList
              title="Popular Movies"
              movies={movies?.popularMovies?.results}
            />
          )}
        </div>
      </div>
    )
  );
}

export default SecondaryContainer;
