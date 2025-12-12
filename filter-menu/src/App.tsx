import { useState } from "react";
import Title from "./components/Title";
import items from "./data/menu";
import "./App.css";
import Menu from "./components/Menu";
import Categories from "./components/Categories";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const filterItems = (category: string) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={allCategories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
