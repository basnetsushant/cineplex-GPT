import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useModalMovieTrailer = (movieId) => {
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    const getMovieVideos = async () => {
      if (!movieId) return;

      console.log(`Fetching videos for movieId: ${movieId}`); // You should see this log

      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        );
        const json = await data.json();

        // ** THIS IS THE MOST IMPORTANT LOG **
        console.log("TMDB API Response for videos:", json);

        if (json.results) {
          const filterData = json.results.filter(
            (video) => video.type === "Trailer"
          );
          console.log("Filtered Trailers:", filterData);

          const trailer = filterData.length ? filterData[0] : json.results[0];
          console.log("Selected Trailer Object:", trailer);

          if (trailer) {
            setTrailerKey(trailer.key);
          } else {
            console.log("No trailer object found in results.");
            setTrailerKey(null);
          }
        } else {
          console.log("No 'results' array in API response.");
          setTrailerKey(null);
        }
      } catch (error) {
        console.error("Failed to fetch movie videos for modal:", error);
        setTrailerKey(null);
      }
    };

    getMovieVideos();
  }, [movieId]);

  return trailerKey;
};

export default useModalMovieTrailer;
