import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const TopRatedMovies = useSelector((store) => store.movies.TopRatedMovies);

  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !TopRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
