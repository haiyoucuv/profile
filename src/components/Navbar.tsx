import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";

import LogoSvg from "../assets/H.svg?react";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import GithubSvg from "../assets/icon/github.svg?react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <nav
      bg={scrolled ? "black/100" : "bg-transparent"}
      className={`px-4% w-full flex items-center py-5 fixed top-0 z-20`}
    >
      <div className="mx-auto max-w-7xl w-full flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <LogoSvg w-9 h-9 object-contain/>
          <p font="bold" text="18px white" cursor="pointer" flex>
            Haiyoucuv
            <span className="sm:block">&nbsp;丨&nbsp;Profile</span>
          </p>
        </Link>

        <ul className="flex-row list-none items-center gap-10 sm:flex">
          {navLinks.map((nav) => {
            if (nav.title == "Github") return null;
            return <a
              key={nav.id}
              href={nav.id}
              text={active === nav.title ? "white" : "secondary"}
              hover:text-white-100
              font="medium"
              cursor="pointer"
              className="text-[18px]"
              onClick={() => setActive(nav.title)}
            >
              {nav.title}
            </a>;
          })}

          <li className="flex cursor-pointer items-center">
              <a href="https://github.com/haiyoucuv/profile">
                <GithubSvg
                    hover:fill-white
                    fill-gray
                    className="h-[50px] w-[50px]"
                />
              </a>
          </li>
        </ul>
      </div>
    </nav>;
};

export default Navbar;
