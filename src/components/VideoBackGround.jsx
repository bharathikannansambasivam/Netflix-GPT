import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";

function VideoBackGround({ movieId }) {
  const trailerVideo = useSelector((store) => store.movies?.movieTrailer);
  useTrailer(movieId);

  if (!trailerVideo || !trailerVideo.key) return null;
  return (
    <div className="relative w-full h-[70vh] sm:h-[50vh] pb-[56.25%] -z-10">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}`}
        allow="autoplay; fullscreen"
      />
    </div>
  );
}

export default VideoBackGround;
