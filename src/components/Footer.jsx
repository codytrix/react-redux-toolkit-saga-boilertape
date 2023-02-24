import { NavLink } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";

const Footer = () => {
  const navigation = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Careers", to: "/careers" },
    { name: "Help", to: "/help" },
  ];
  return (
    <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
          <img src={viteLogo} className="react" alt="React logo" />
          <span className="self-center text-2xl mx-1 font-semibold whitespace-nowrap text-white">
            +
          </span>
          <img src={reactLogo} className="react" alt="React logo" />
        </div>
        <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0 text-gray-400">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink to={item.to} className="mr-4 hover:underline md:mr-6 ">
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
      <span className="block text-sm sm:text-center text-gray-400">
        ©{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          React-Redux-Toolkit-Saga-Boilertape
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
