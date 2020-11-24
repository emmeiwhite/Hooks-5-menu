import React from "react";
import "./Categories.css";

const Categories = ({ menus, handleClick }) => {
  const links = menus.map((category, index) => (
    <li key={index} onClick={(e) => handleClick(e.target)}>
      {category}
    </li>
  ));
  return (
    <ul className="menus">
      <li onClick={(e) => handleClick(e.target)}>all</li>
      {links}
    </ul>
  );
};

export default Categories;
