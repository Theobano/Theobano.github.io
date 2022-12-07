import React from "react";
import "../assets/styles/components/NavBar.css";
import { toLinksList } from "../utils/navigation";

function NavBar() {
  var navLinkProps = [
    {
      name: "Home",
      link: "/",
      key: "home",
    },
    {
      name: "About",
      link: "/about",
      key: "about",
    },
    {
      name: "Projects",
      link: "/projects",
      key: "projects",
    },
    // {
    //   name: "Contact",
    //   link: "/contact",
    //   key: "contact",
    // },
  ];

  var navLinks = toLinksList(navLinkProps);

  return (
    <nav className="navbar">
      <ul className="horizontal-flex">{navLinks}</ul>
    </nav>
  );
}

export default NavBar;
