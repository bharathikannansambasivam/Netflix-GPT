import { useSelector } from "react-redux";

function VideoTitle({ title, overview }) {
  const trailerVideo = useSelector((store) => store.movies.movieTrailer);
  return (
    <div className="absolute md:h-full     w-full md:top-0 top-[45%] left-0 md:right-0 md:bottom-0  text-white flex flex-col justify-center px-10">
      <div className="max-w-2xl     w-full">
        <h2 className="sm:text-3xl text-xl font-black mb-2 ">{title}</h2>
        <p className="text-md mb-4 hidden  md:block">{overview}</p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-3 sm:px-6 py-2 rounded hover:opacity-75">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.youtube.com/watch?v=${trailerVideo?.key}`}
            >
              Play Now
            </a>
          </button>
          <button className="bg-gray-700 text-white px-3 sm:px-6py-2 rounded hover:opacity-75">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoTitle;
