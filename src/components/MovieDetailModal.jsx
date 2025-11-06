import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../utils/modalSlice";
import useModalMovieTrailer from "../hooks/useModalMovieTrailer";
import { IMG_CDN_URL } from "../utils/constants";

const MovieDetailModal = () => {
  const dispatch = useDispatch();
  const { isModalOpen, selectedMovie } = useSelector((store) => store.modal);
  const trailerKey = useModalMovieTrailer(selectedMovie?.id);

  if (!isModalOpen || !selectedMovie) return null;

  const handleClose = () => dispatch(closeModal());

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  const {
    original_title,
    overview,
    release_date,
    vote_average,
    original_language,
    backdrop_path,
  } = selectedMovie;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-black w-full max-w-2xl rounded-lg overflow-hidden relative animate-fade-in-up shadow-lg">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75 transition cursor-pointer"
        >
          X
        </button>

        {/* Video Section */}
        <div className="w-full h-64 sm:h-96">
          {trailerKey ? (
            <iframe
              className="w-full h-full rounded-md"
              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=0&controls=1&rel=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div
              className="w-full h-full bg-cover bg-center flex items-end justify-start p-4 rounded-md"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url(${
                  IMG_CDN_URL + backdrop_path
                })`,
              }}
            >
              <h3 className="text-white text-lg font-bold">
                Trailer not available
              </h3>
            </div>
          )}
        </div>

        {/* Movie Info */}
        <div className="p-6 text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {original_title}
          </h2>
          <p className="text-sm sm:text-md mb-4">{overview}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-400 text-sm">
            <span>Release Date: {release_date}</span>
            <span>Rating: {vote_average?.toFixed(1)}</span>
            <span>Language: {original_language?.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailModal;
