// components/GPTSearch.jsx

import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* <div className="pt-[100px] md:pt-[150px]"> */}
      <GPTSearchBar />
      <GPTMovieSuggestions />
      {/* </div> */}
    </div>
  );
};

export default GPTSearch;
