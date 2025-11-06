import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { openModal } from "../utils/modalSlice";
const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const { poster_path } = movie;
  if (!poster_path) return null;
  const handleCardClick = () => {
    dispatch(openModal(movie));
  };
  return (
    <div
      className="min-w-[160px] sm:min-w-[180px] md:min-w-[200px] hover:scale-105 transition-transform duration-200 cursor-pointer"
      onClick={handleCardClick}
    >
      <img
        className="rounded-md w-full object-cover"
        src={IMG_CDN_URL + poster_path}
        alt="Movie Poster"
      />
    </div>
  );
};
export default MovieCard;
