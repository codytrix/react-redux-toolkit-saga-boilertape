const CareerDetailsSkeleton = () => {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg mt-6">
      <div className="px-4 py-5 sm:px-6">
        <div className="skeleton w-40 h-6" />
        <div className="skeleton w-48 h-4 mt-2 max-w-2xl" />
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <div className="skeleton w-24 h-6" />
            <div className="skeleton w-48 h-6 mt-1 sm:col-span-2 sm:mt-0" />
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <div className="skeleton w-24 h-6" />
            <div className="skeleton w-32 h-6 mt-1 sm:col-span-2 sm:mt-0" />
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <div className="skeleton w-28 h-6" />
            <div className="skeleton w-32 h-6 mt-1 sm:col-span-2 sm:mt-0" />
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <div className="skeleton w-28 h-6" />
            <div className="skeleton w-full h-10 mt-1 sm:col-span-2 sm:mt-0" />
          </div>
        </dl>
      </div>
    </div>
  );
};

export default CareerDetailsSkeleton;
