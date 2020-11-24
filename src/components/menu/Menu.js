import React from "react";
import Categories from "./../categories/Categories";
import data from "./../../data";

const Menu = () => {
  const categories = data.map((menu) => menu.category);
  const filteredCategories = [...new Set(categories)];

  console.log(filteredCategories);
  return (
    <section>
      <Categories menus={filteredCategories} />
    </section>
  );
};

export default Menu;
