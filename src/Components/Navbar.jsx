import { NavLink } from "react-router";
import ThemeController from "../ThemeController/ThemeController";
import Container from "./Container";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Links from "./Links";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { name: "Home", to: "/" },
    { name: "Listed Books", to: "/listed-books" },
    { name: "Pages To Read", to: "/pages-to-read" },
  ];
  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <Container>
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-2 ">
          <span onClick={handleMenuOpen} className="lg:hidden cursor-pointer">
            {menuOpen ? <X /> : <Menu />}
            <ul
              className={`flex flex-col gap-3 text-sm bg-green-50 py-4 px-6 rounded-md w-44 lg:hidden absolute duration-900 transition-all border border-green-600 text-gray-600 ${
                menuOpen ? "top-14" : "-top-50"
              }`}
            >
              <li className="duration-300 transition-all hover:text-green-900">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="duration-300 transition-all hover:text-green-900">
                <NavLink to="/listed-books">Listed Books</NavLink>
              </li>
              <li className="duration-300 transition-all hover:text-green-900">
                <NavLink to="/pages-to-read">Pages To Read</NavLink>
              </li>
              <li className="duration-300 transition-all hover:text-green-900">
                <a>Sign In</a>
              </li>
              <li className="duration-300 transition-all hover:text-green-900">
                <a>Sign Up</a>
              </li>
            </ul>
          </span>

          <NavLink to="/" className="text-xl lg:text-2xl font-semibold">
            Book Vibe
          </NavLink>
        </div>

        <div className="hidden lg:flex">
          <ul className="flex items-center gap-8 text-base">
            {navItems.map((item, i) => (
              <Links item={item} key={i} />
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <a className="btn bg-green-600 text-white hidden lg:flex rounded-lg px-6">
            Sign In
          </a>
          <a className="btn bg-[#59C6D2] text-white hidden lg:flex rounded-lg px-6">
            Sign Up
          </a>
          <ThemeController />
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
