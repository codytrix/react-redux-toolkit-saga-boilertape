import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCareer } from "../../redux/ducks/CareersSlice";
import CareerDetailsSkeleton from "../../skeletons/CareerDetailsSkeleton";
import NotFound from "../NotFound";

export default function CareerDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCareer({ id }));
  }, [dispatch]);

  const career = useSelector((state) => state.careers.career);
  const error = useSelector((state) => state.careers.error);
  if (career || error) {
    return (
      <div className="career-details">
        {career && (
          <div className="overflow-hidden bg-white shadow sm:rounded-lg mt-6">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Job Information
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Job details and application.
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Job title
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {career.title}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Location
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {career.location}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Salary expectation
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    $120,000
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Description{" "}
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {career.description}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        )}
        {error && (
          <NotFound
            type={"Fetch error"}
            title={error}
            message={"Sorry, try again later..."}
          />
        )}
      </div>
    );
  } else {
    return <CareerDetailsSkeleton />;
  }
}
