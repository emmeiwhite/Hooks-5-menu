import React from "react";
import "./MenuItems.css";

export default function MenuItems({ menulist }) {
  console.log(menulist);
  const menuList = menulist.map((menu) => (
    <div className="menu-item">
      <p>{menu.title}</p>
      <p>{menu.desc}</p>
    </div>
  ));
  return <div class="menulist-wrapper">{menuList}</div>;
}
