import GPTSearchBar from "./GPTsearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";

const GPTSearch = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center px-2 sm:px-8 bg-black">
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
