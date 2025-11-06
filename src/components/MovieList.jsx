// import { useRef } from "react";
// import MovieCard from "./MovieCard";

// const MovieList = ({ title, movies }) => {
//   const listRef = useRef(null);

//   const scrollNext = () => {
//     listRef.current.scrollBy({ left: 300, behavior: "smooth" });
//   };

//   const scrollPrev = () => {
//     listRef.current.scrollBy({ left: -300, behavior: "smooth" });
//   };

//   return (
//     <div className="px-4 sm:px-8 mb-6 relative">
//       <h1 className="text-xl sm:text-2xl font-bold text-white mb-3">{title}</h1>

//       <img
//         src="/arrow (1).png"
//         alt="Left Arrow"
//         className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 cursor-pointer bg-white/30 p-1 rounded-full"
//         onClick={scrollPrev}
//       />

//       <div
//         ref={listRef}
//         className="flex gap-4 overflow-x-auto overflow-y-hidden no-scrollbar py-2"
//       >
//         {movies.map((movie) => (
//           <MovieCard
//             key={movie.id}
//             posterPath={movie.poster_path}
//           />
//         ))}
//       </div>

//       <img
//         src="/arrow.png"
//         alt="Right Arrow"
//         className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 cursor-pointer bg-white/30 p-1 rounded-full"
//         onClick={scrollNext}
//       />
//     </div>
//   );
// };

// export default MovieList;

import { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const listRef = useRef(null);

  const scrollNext = () => {
    listRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const scrollPrev = () => {
    listRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  if (!movies || movies.length === 0) return null; // Added a safety check

  return (
    <div className="px-4 sm:px-8 mb-6 relative group">
      {" "}
      {/* Added 'group' for hover effects on arrows */}
      <h1 className="text-xl sm:text-2xl font-bold text-white mb-3">{title}</h1>
      {/* --- SCROLL ARROWS --- */}
      <img
        src="/arrow (1).png"
        alt="Left Arrow"
        // Hide arrow on small screens, show on hover on larger screens
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 cursor-pointer bg-black/50 p-1 rounded-full hidden group-hover:block"
        onClick={scrollPrev}
      />
      <div
        ref={listRef}
        className="flex gap-4 overflow-x-auto overflow-y-hidden no-scrollbar py-2"
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie} // <-- *** THE ONLY CHANGE YOU NEED TO MAKE IN THIS FILE ***
          />
        ))}
      </div>
      <img
        src="/arrow.png"
        alt="Right Arrow"
        // Hide arrow on small screens, show on hover on larger screens
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 cursor-pointer bg-black/50 p-1 rounded-full hidden group-hover:block"
        onClick={scrollNext}
      />
    </div>
  );
};

export default MovieList;
