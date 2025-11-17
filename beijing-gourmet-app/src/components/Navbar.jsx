import { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <header className="
        sticky top-0 z-50 w-screen
        bg-[#7a1515]
        flex justify-between items-center
        px-6 md:px-10 py-3
        italic
    ">
      <NavLink to="/" id="logo_link" className="flex items-center">
        <Logo />
      </NavLink>

      {/* Hamburger menu (mobile/portriat only) */}
      <button
        className="md:hidden text-[#f5f5f5] text-3xl"
        onClick={() => setHamburgerOpen(!hamburgerOpen)}
      >
        {hamburgerOpen ? "✕" : "☰"}
      </button>

      {/* Nav links */}
      <Nav hamburgerOpen={hamburgerOpen} />
    </header>
  );
};

export default Navbar;
