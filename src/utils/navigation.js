import React from "react";
import { NavLink } from "react-router-dom";

export function toLinksList(linkProps) {
  var linksList = linkProps.map((linkProp) => {
    return (
      <li key={linkProp.key}>
        <NavLink to={linkProp.link} className="nav-link">
          {linkProp.name}
        </NavLink>
      </li>
    );
  });
  return linksList;
}
