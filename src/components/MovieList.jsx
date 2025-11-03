// import MovieCard from "./MovieCard";

// const MovieList = ({ title, movies }) => {
//   console.log(movies);

//   return (
//     <div>
//       <div className="flex overflow-x-scroll">
//         <h1>{title}</h1>
//         <div className="flex">
//           {movies.map((movie) => (
//             <MovieCard
//               key={movie.id}
//               posterPath={movie.poster_path}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieList;
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-8 mb-6">
      <h1 className="text-2xl font-bold text-white mb-3">{title}</h1>

      {/* ✅ Hides scrollbars cleanly */}
      <div className="flex gap-4 overflow-x-scroll overflow-y-hidden no-scrollbar">
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
