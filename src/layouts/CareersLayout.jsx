import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div>
      <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Don't give up on your dream job
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
          quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
        </p>
      </div>
      <Outlet />
    </div>
  );
}
