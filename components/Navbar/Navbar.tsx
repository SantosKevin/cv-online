"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./navbar.css";
import { FaListUl } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import ListNav from "../ListNav/ListNav";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;
    let navbar = document.getElementById("navbar");

    const checkTop = () => {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        navbar?.classList.add("icon");
      } else {
        navbar?.classList.remove("icon");
      }
      lastScrollTop = scrollTop;
    }
    window.addEventListener("scroll", checkTop );
    return () => {
      window.removeEventListener("scroll", checkTop );
    };
  }, []);

  useEffect(() => {
    const handleWindowSize = () => {
      if (window.innerWidth < 991) {
        setShowMenu(false);
      }
    }
    handleWindowSize();
  }, [])
  

  const removeShowMenu = () => setShowMenu(!showMenu);

  return (
    <header className="header">
      <nav id="navbar" className={"navCustom"}>
        <Link href={"/"} className={"brand"}>
          <span>
            <BiCodeAlt />
          </span>
          <span> Kevin Santos </span>
        </Link>

        <FaListUl className="menuIcon" onClick={removeShowMenu}/>

        {showMenu && <ListNav />}
      </nav>
    </header>
  );
};

export default Navbar;
