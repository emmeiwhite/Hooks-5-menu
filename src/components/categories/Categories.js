import React from "react";
import "./Categories.css";

const Categories = ({ menus }) => {
  const links = menus.map((category, index) => <li key={index}>{category}</li>);
  return (
    <ul className="menus">
      <li>All</li>
      {links}
    </ul>
  );
};

export default Categories;
