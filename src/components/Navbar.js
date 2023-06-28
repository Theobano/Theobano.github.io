import React from "react";
import { toLinksList } from "../utils/navigation";
import { NavBarContainer } from "./NavBar.style";

function NavBar({printable = true}) {
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
    <NavBarContainer printable={printable}>
      <ul className="horizontal-flex">{navLinks}</ul>
    </NavBarContainer>
  );
}

export default NavBar;
