import React, { useState } from "react";
import Menu from "./components/menu/Menu";
import Categories from "./components/categories/Categories";
import items from "./data";

function App() {
  return (
    <section className="app-wrapper">
      <Menu />
      <Categories />
    </section>
  );
}

export default App;
