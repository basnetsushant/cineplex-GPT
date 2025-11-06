import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies) return null;

  return (
    <div className="bg-black">
      <div className="-mt-17 relative z-20 pl-10 pr-10 pb-10">
        {movies.NowPlayingMovies && (
          <MovieList
            title="Now Playing"
            movies={movies.NowPlayingMovies}
          />
        )}

        {movies.TopRatedMovies && (
          <MovieList
            title="Top Rated"
            movies={movies.TopRatedMovies}
          />
        )}

        {movies.PopularMovies && (
          <MovieList
            title="Popular"
            movies={movies.PopularMovies}
          />
        )}
        {movies.UpcomingMovies && (
          <MovieList
            title="Upcoming Movies"
            movies={movies.UpcomingMovies}
          />
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;
