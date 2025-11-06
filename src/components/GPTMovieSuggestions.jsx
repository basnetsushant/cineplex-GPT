import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import GPTSearchBar from "./GPTSearchBar";
const GPTMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames || !movieResults || movieNames.length === 0) {
    return (
      <div className="absolute top-0 left-0 w-full min-h-screen bg-black bg-opacity-95 overflow-y-auto pt-[150px] pb-10">
        <div className="px-6 md:px-12 flex justify-center">
          {" "}
          <GPTSearchBar />
        </div>
      </div>
    );
  }

  return (
    <div className="absolute top-0 left-0 w-full min-h-screen bg-black bg-opacity-95 overflow-y-auto pt-[150px] pb-10">
      <div className="px-6 md:px-12">
        <div className="flex justify-center mb-10">
          <GPTSearchBar />
        </div>

        {movieNames.map((movieName, index) => (
          <div
            key={movieName}
            className="mb-10"
          >
            <MovieList
              title={movieName}
              movies={movieResults[index]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
