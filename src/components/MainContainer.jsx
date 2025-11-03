import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.NowPlayingMovies);
  if (!movies) return null;

  //   const mainMovie = movies[0];
  //   // console.log(mainMovie);

  //   const { original_title, overview, id } = mainMovie;
  //   return (
  //     <div>
  //       <VideoTitle
  //         title={original_title}
  //         overview={overview}
  //       />
  //       <VideoBackground movieId={id} />
  //     </div>
  //   );
  // };

  // export default MainContainer;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative w-full h-[90vh]">
      {" "}
      {/* slightly less than full screen */}
      <VideoBackground movieId={id} />
      <VideoTitle
        title={original_title}
        overview={overview}
      />
    </div>
  );
};

export default MainContainer;
