import { useEffect } from "react";
import { useSelector } from "react-redux";

function VideoTitle({ title, overview }) {
  const trailerVideo = useSelector((store) => store.movies.movieTrailer);
  return (
    <div className="absolute left-10 top-[38vh] sm:top-1/2 md:top-2/5 -translate-y-1/2 pb-10 text-white z-10 max-w-xl">
      <h2 className="sm:text-2xl md:text-3xl text-md font-black mb-2">
        {title}
      </h2>
      <p className="text-sm lg:text-lg mb-4 hidden md:block">{overview}</p>
      <div className="flex gap-4 text-xs">
        <button className="bg-white text-black px-3 sm:px-6 py-2 rounded hover:opacity-75">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.youtube.com/watch?v=${trailerVideo?.key}`}
          >
            Play Now
          </a>
        </button>
        <button className="bg-gray-700 text-white px-3 sm:px-6 py-2 rounded hover:opacity-75">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
