import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCareers } from "../../redux/ducks/CareersSlice";
import { MapPinIcon } from "@heroicons/react/24/outline";
import NotFound from "../NotFound";
import CareersSkeleton from "../../skeletons/CareersKeleton";

export default function Careers() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCareers());
  }, [dispatch]);

  const { careers } = useSelector((state) => state.careers);
  const { error } = useSelector((state) => state.careers);

  if (careers || error) {
    return (
      <>
        {careers && (
          <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {careers.map((career) => (
              <Link
                to={career.id.toString()}
                key={career.id}
                className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={career.imageSrc}
                    alt={career.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">{career.title}</h3>
                    <div className="flex mt-2">
                      <MapPinIcon className="h-6 w-5" aria-hidden="true" />
                      <p className="mt-1 text-sm text-gray-500">
                        {" "}
                        {career.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {career.salary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
        {error && (
          <NotFound
            type={"Fetch error"}
            title={error}
            message={"Sorry, try again later..."}
          />
        )}
      </>
    );
  } else {
    return <CareersSkeleton />;
  }
}
