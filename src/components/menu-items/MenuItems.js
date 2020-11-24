import React from "react";
import "./MenuItems.css";

export default function MenuItems({ menulist }) {
  console.log(menulist);
  const menuList = menulist.map((menu) => (
    <div className="menu-item">
      <div className="menu-image-wrapper">
        <img src={menu.img} alt="image" className="photo" />
      </div>

      <div className="menu-description">
        <div className="menu-title-price">
          <span className="menu-title">{menu.title}</span>
          <span className="menu-price">$ {menu.price}</span>
        </div>
        <p className="menu-description-text">{menu.desc}</p>
      </div>
    </div>
  ));
  return <div class="menulist-wrapper">{menuList}</div>;
}
