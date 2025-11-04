// const GPTMovieSuggestions = () => {
//   return <div>GPTMovieSuggestions</div>;
// };

// export default GPTMovieSuggestions;

import MovieCard from "./MovieCard";

const GPTMovieSuggestions = ({ movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="bg-black text-white px-10 py-10">
      <h2 className="text-2xl font-bold mb-6">Recommended Movies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
