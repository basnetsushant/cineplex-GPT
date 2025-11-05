import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GPTsearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2 bg-black/40 rounded-lg p-2 md:w-1/2 w-[90%]"
    >
      <input
        type="text"
        className="flex-grow p-3 rounded-lg text-white"
        placeholder={lang[langKey].gptSearchPlaceholder}
      />
      <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
        {lang[langKey].search}
      </button>
    </form>
  );
};

export default GPTsearchBar;
