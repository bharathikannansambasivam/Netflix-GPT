import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { OPTIONS } from "../utils/constant";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
          OPTIONS
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error.message);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie)
    return (
      <div className="text-white bg-black h-screen w-screen opacity-85 flex justify-center items-center text-center mt-10">
        <div className="loader"></div>
      </div>
    );

  return (
    <div className="text-white p-6 sm:h-screen w-screen bg-black">
      <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
      <p className="italic text-gray-400 mb-4">{movie.tagline}</p>

      <div className="flex flex-col sm:flex-row gap-6">
        <img
          className="w-full sm:w-[300px] rounded"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="flex flex-col gap-3">
          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Runtime:</strong> {movie.runtime} min
          </p>
          <p>
            <strong>Rating:</strong> ⭐ {movie.vote_average} / 10
          </p>
          <p>
            <strong>Votes:</strong> {movie.vote_count}
          </p>
          <p>
            <strong>Overview:</strong> {movie.overview}
          </p>
          <p>
            <strong>Genres:</strong>{" "}
            {movie.genres?.map((g) => g.name).join(", ")}
          </p>
          <p>
            <strong>Production:</strong>{" "}
            {movie.production_companies?.map((c) => c.name).join(", ")}
          </p>

          {movie?.revenue && (
            <p>
              <strong>Revenue:</strong> {movie.revenue}
            </p>
          )}

          <a
            className="mt-4  bg-red-600 text-white px-6 sm:w-fit py-2 rounded hover:bg-red-700"
            href={movie.homepage}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Official Site
          </a>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
