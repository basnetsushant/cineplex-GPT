const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute bottom-0 left-0 w-full text-white px-4 md:px-20 pb-28 bg-gradient-to-t from-black via-black/60 to-transparent">
      <h1 className="text-xl md:text-4xl font-bold mb-6">{title}</h1>

      <p className="w-full md:w-1/2 text-sm md:text-base leading-relaxed text-gray-200 mb-8 hidden md:block">
        {overview}
      </p>

      <div className="flex gap-4">
        <button className="bg-white text-black px-6 md:py-2 py-1 rounded-sm hover:bg-opacity-70 transition">
          Play
        </button>
        <button className="bg-gray-500 text-white px-6 md:py-2 py-1 rounded-sm hover:bg-gray-600 transition">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
