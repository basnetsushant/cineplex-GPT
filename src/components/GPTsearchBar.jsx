import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import genAI from "../utils/geminiai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult, setShowShimmer } from "../utils/gptSlice";

// import client from "../utils/openAI";

const GPTsearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const SearchTmdbMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log("Search Text:", searchText.current.value);

    // dispatch(setShowShimmer(true));

    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give names of 7 movies, comma separated like the example result ahead. Example Result: Sholay, Golmaal, Jawan, Kantara, Don, Saaho, Kick";

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = gptQuery;
    try {
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();
      if (!text) {
        // dispatch(setShowShimmer(false));
        return null;
      }

      console.log("Gemini API Response:", text);

      const geminiMovieResults = text.split(",").map((movie) => movie.trim());
      // console.log(geminiMovieResults);

      const promiseArray = geminiMovieResults.map((movie) =>
        SearchTmdbMovies(movie)
      );
      const tmdbMovieResults = await Promise.all(promiseArray);

      dispatch(
        addGptMovieResult({
          movieNames: geminiMovieResults,
          movieResults: tmdbMovieResults,
        })
      );
      // dispatch(setShowShimmer(false));
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      // dispatch(setShowShimmer(false));
    }
  };
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2 bg-black/40 rounded-lg p-2 md:w-1/2 w-[90%]"
    >
      <input
        ref={searchText}
        type="text"
        className="flex-grow p-3 rounded-lg text-white border border-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-red-600"
        placeholder={lang[langKey].gptSearchPlaceholder}
      />
      <button
        className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition cursor-pointer"
        onClick={handleGptSearchClick}
      >
        {lang[langKey].search}
      </button>
    </form>
  );
};

export default GPTsearchBar;
