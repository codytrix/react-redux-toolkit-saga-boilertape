import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact, { contactAction } from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import Careers from "./pages/careers/Careers";
import CareerDetails from "./pages/careers/CareerDetails";

// layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Help" element={<HelpLayout />}>
        <Route path="Faq" element={<Faq />} />
        <Route path="Contact" element={<Contact />} action={contactAction} />
      </Route>
      <Route path="Careers" element={<CareersLayout />}>
        <Route index element={<Careers />} />
        <Route path=":id" element={<CareerDetails />} />
      </Route>

      <Route
        path="*"
        element={
          <NotFound
            type={"404"}
            title={"Page not found"}
            message={"Sorry, we couldn’t find the page you’re looking for."}
          />
        }
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
