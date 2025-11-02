import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.TrailerVideo);

  useMovieTrailer(movieId);

  if (!trailerVideo) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <iframe
        className="w-full h-full aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}`}
        title="Movie Trailer"
        allow="autoplay; fullscreen"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>

      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black"></div>
    </div>
  );
};

export default VideoBackground;
