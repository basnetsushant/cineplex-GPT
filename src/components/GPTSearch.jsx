import GptSearchBar from "./GPTsearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GPTsearch = () => {
  return (
    <div className="relative w-screen h-screen text-white">
      <div className="absolute inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src={BG_URL}
          alt="Background"
        />
      </div>

      <div className="flex flex-col items-center justify-center h-full">
        <GptSearchBar />
        <GPTMovieSuggestions />
      </div>
    </div>
  );
};

export default GPTsearch;
