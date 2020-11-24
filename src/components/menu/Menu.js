import React, { useState } from "react";
import Categories from "./../categories/Categories";
import MenuItems from "./../menu-items/MenuItems";
import data from "./../../data";

const Menu = () => {
  const [menulist, setMenuList] = useState([]);
  const categories = data.map((menu) => menu.category);
  const filteredCategories = [...new Set(categories)];

  const handleLinkClick = (value) => {
    if (value.firstChild.data === "all") {
      setMenuList(data);
    } else {
      const menulist = data.filter(
        (menu) => menu.category === value.firstChild.data
      );
      setMenuList(menulist);
    }
  };
  return (
    <section>
      <Categories menus={filteredCategories} handleClick={handleLinkClick} />
      <MenuItems menulist={menulist} />
    </section>
  );
};

export default Menu;
