import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  
  const dispatch = useDispatch();
  const NowPlayingMovies = useSelector(
    (store) => store.movies.NowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    if (!NowPlayingMovies) getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
