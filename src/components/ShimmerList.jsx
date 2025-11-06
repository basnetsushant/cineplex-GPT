// components/ShimmerList.jsx
const ShimmerList = () => {
  return (
    <div className="md:pl-6 px-2 text-white">
      <div className="h-8 md:h-12 w-40 bg-gray-700 rounded animate-pulse my-4" />{" "}
      <div className="flex overflow-x-scroll scrollbar-hiden">
        <div className="flex space-x-4">
          {Array.from({ length: 10 }).map((_, idx) => (
            <div
              key={idx}
              className="md:w-36 w-32 h-48 bg-gray-600 rounded-lg animate-pulse" // Darker gray for Netflix theme
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShimmerList;
