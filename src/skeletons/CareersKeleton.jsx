const CareersSkeleton = () => {
  const array = Array(8).fill("");
  return (
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {array.map((value, index) => (
        <div className="group relative" key={index}>
          <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-80">
            <div className="skeleton h-full w-full object-cover object-center lg:h-full lg:w-full" />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <div className="skeleton w-32 h-4" />
              <div className="skeleton w-28 h-6 mt-6" />
            </div>
            <div className="skeleton w-16 h-4" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CareersSkeleton;
