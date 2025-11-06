import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  // We don't need to select the trailer video here,
  // as this hook's job is just to fetch and dispatch.

  useEffect(() => {
    // Define the async function inside the effect.
    const getMovieVideos = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        );
        const json = await data.json();

        // Safety check if results exist
        if (json.results) {
          const filterData = json.results.filter(
            (video) => video.type === "Trailer"
          );
          const trailer = filterData.length ? filterData[0] : json.results[0];
          // Dispatch only if a trailer is actually found
          if (trailer) {
            dispatch(addTrailerVideo(trailer));
          }
        }
      } catch (error) {
        console.error("Failed to fetch main movie trailer:", error);
      }
    };

    // **KEY CHANGE**: Only run the fetch if there is a valid movieId.
    if (movieId) {
      getMovieVideos();
    }

    // The dependency array should include movieId to re-fetch if it ever changes.
  }, [movieId, dispatch]);

  // A hook should not return JSX. It provides logic, so we return nothing.
  return;
};

export default useMovieTrailer;
