// import { IMG_CDN_URL } from "../utils/constants";

// const MovieCard = ({ posterPath }) => {
//   if (!posterPath) return null;

//   return (
//     <div className="min-w-[160px] sm:min-w-[180px] md:min-w-[200px] hover:scale-105 transition-transform duration-200 cursor-pointer">
//       <img
//         className="rounded-md w-full object-cover"
//         src={IMG_CDN_URL + posterPath}
//         alt="Movie Poster"
//       />
//     </div>
//   );
// };

// export default MovieCard;

import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { openModal } from "../utils/modalSlice"; // <-- 1. IMPORT THE ACTION
const MovieCard = ({ movie }) => {
  // <-- 2. RECEIVE THE FULL MOVIE OBJECT
  const dispatch = useDispatch();
  const { poster_path } = movie; // Destructure poster_path from the movie object
  if (!poster_path) return null;
  // 3. CREATE THE CLICK HANDLER
  const handleCardClick = () => {
    // Dispatch the openModal action and pass the entire movie object as the payload
    dispatch(openModal(movie));
  };
  return (
    <div
      className="min-w-[160px] sm:min-w-[180px] md:min-w-[200px] hover:scale-105 transition-transform duration-200 cursor-pointer"
      onClick={handleCardClick} // <-- 4. ADD THE ONCLICK EVENT
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
