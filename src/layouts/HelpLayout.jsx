import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <>
      <div className="mx-auto max-w-2xl py-4 sm:py-6 lg:py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            We are here to help you with React struggle
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <nav className="mt-10 flex items-center justify-center gap-x-6">
            <NavLink
              to="faq"
              className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Frequently asked questions
            </NavLink>
            <NavLink
              to="contact"
              className="text-base font-semibold leading-7 text-gray-900">
              Contact Us <span aria-hidden="true">→</span>
            </NavLink>
          </nav>
        </div>
      </div>
      <Outlet />
    </>
  );
}
