import React, { useState } from "react";
import Menu from "./components/menu/Menu";
import items from "./data";

import "./App.css";

function App() {
  const [menus, setMenus] = useState(items);

  return (
    <section className="app-wrapper">
      <h2 className="heading">Our Menu</h2>

      <Menu />
    </section>
  );
}

export default App;
