import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-scroll";

import Container from "../UIComponents/Container";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  const handleScroll = () => {
    if (window.scrollY > 80) {
      setScrolled(true);
    } else {
      setScrolled(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 90) {
        return setScrolled(true);
      }
      return setScrolled(false);
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarLinks = [
    {
      to: "home",
      label: "Home",
      offset: null,
    },
    {
      to: "vantagens",
      label: "Vantagens",
      offset: -40,
    },
    {
      to: "participe",
      label: "Participar",
      offset: -70,
    },
    {
      to: "depoimentos",
      label: "Depoimentos",
      offset: -40,
    },
    {
      to: "sobre",
      label: "Sobre",
      offset: null,
    },
  ];

  return (
    <header
      className={`bg-transparent z-20 fixed w-full h-20 transition duration-300 border-b border-transparent ${
        scrolled
          ? "bg-slate-50 shadow-md border-gray-200 md:!bg-slate-50"
          : "bg-transparent md:!bg-transparent"
      } ${isOpen ? "bg-[#212121]/90 backdrop-blur" : ""}`}
    >
      <Container className="h-full">
        <nav className="h-full flex items-center justify-between">
          <a
            href="/"
            className={`text-2xl text-gray-900 md:!text-gray-900 font-customSerif ${
              isOpen ? "!text-slate-50" : "text-gray-900"
            }`}
          >
            Marcos Oliveira
          </a>

          <button
            type="button"
            className={`text-gray-800 text-3xl md:hidden ${
              isOpen ? "text-slate-50" : "text-gray-900"
            }`}
            onClick={handleMenuClick}
          >
            <HiMenu />
          </button>

          <ul
            className={`
              gap-4
              md:gap-6
              text-gray-800
              w-[90%]
              bg-[#212121]/90
              backdrop-blur
              fixed
              flex
              flex-col
              top-20
              right-0
              p-4
              h-screen
              transition
              duration-300
              
              md:static 
              md:flex-row 
              md:h-auto 
              md:bg-transparent 
              md:backdrop-blur-none
              md:w-auto
              md:translate-x-0
              ${isOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            {navbarLinks.map((link) => (
              <li
                key={link.to}
                className="transition duration-200 hover:scale-105 "
              >
                <Link
                  className={`flex gap-2 transition duration-200 cursor-pointer border-b border-transparent md:!text-gray-900 hover:border-gray-800 font-gray-900 ${
                    isOpen ? "text-slate-50" : "text-gray-900"
                  }`}
                  to={link.to}
                  offset={link.offset ? link.offset : 0}
                  smooth
                  spy
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
