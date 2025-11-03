// import { IMG_CDN_URL } from "../utils/constants";

// const MovieCard = ({ posterPath }) => {
//   return (
//     <div className="w-48">
//       <img
//         src={IMG_CDN_URL + posterPath}
//         alt="Movie Card"
//       />
//     </div>
//   );
// };

// export default MovieCard;

import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="min-w-[160px] sm:min-w-[180px] md:min-w-[200px] hover:scale-105 transition-transform duration-200 cursor-pointer">
      <img
        className="rounded-md w-full object-cover"
        src={IMG_CDN_URL + posterPath}
        alt="Movie Poster"
      />
    </div>
  );
};

export default MovieCard;
