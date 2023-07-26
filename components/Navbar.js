import logo from "@/public/logo.png";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  let Links = [
    { name: "Portfolio", link: "#portfolio" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll("nav a");
      const currentPosition = window.scrollY + 80;

      sections.forEach((section) => {
        if (
          section.offsetTop <= currentPosition &&
          section.offsetTop + section.offsetHeight > currentPosition
        ) {
          navLinks.forEach((link) => {
            link.classList.remove(
              "text-orangeColor",
              "hover:text-white",
              "duration-500",
              "border-orangeColor",
              "border-dashed",
              "border-b"
            );

            if (
              section.getAttribute("id") ===
              link.getAttribute("href").substring(1)
            ) {
              link.classList.add(
                "text-orangeColor",
                "hover:text-white",
                "duration-500",
                "border-orangeColor",
                "border-dashed",
                "border-b"
              );
            }
          });
        }
      });
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className='shadow-md w-full fixed top-0 left-0 z-10'>
      <nav className='navbar md:flex items-center justify-between bg-darkColor py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
          <Image width={200} className='logo' src={logo} alt='Logo' />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
        >
          {open ? (
            <CloseIcon className='text-white' />
          ) : (
            <MenuIcon className='text-white' />
          )}
        </div>

        <ul
          className={`nav md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-darkColor md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className='nav-link md:ml-8 text-xl md:my-0 my-7'
            >
              <a
                href={link.link}
                className={
                  "text-white hover:text-orangeColor duration-500 font-roboto"
                }
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className='text-orangeColor border-orangeColor border-dashed'></div>
    </header>
  );
};

export default Navbar;
