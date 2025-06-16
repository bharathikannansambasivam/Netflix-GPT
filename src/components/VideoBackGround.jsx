import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";

function VideoBackGround({ movieId }) {
  const trailerVideo = useSelector((store) => store.movies?.movieTrailer);
  useTrailer(movieId);

  if (!trailerVideo || !trailerVideo.key) return null;
  return (
    <div className="absolute h-screen w-screen overflow-hidden -z-10">
      <iframe
        className=" h-screen  aspect-video "
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}`}
        allow="autoplay; fullscreen"
        frameBorder="0"
      />
    </div>
  );
}

export default VideoBackGround;
