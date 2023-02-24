import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function RootLayout() {
  const currentPath = useLocation();

  return (
    <>
      <div className="min-h-full">
        <Navigation />

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {currentPath.pathname}{" "}
            </h1>
          </div>
        </header>

        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              <Outlet />
            </div>
            {/* /End replace */}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
