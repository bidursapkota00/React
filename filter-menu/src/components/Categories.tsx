import { type Category } from "../types/menu";
import "./Categories.css";

interface CategoriesProps {
  categories: Category[];
  filterItems: (category: Category) => void;
}

const Categories = ({ categories, filterItems }: CategoriesProps) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            type="button"
            className="btn"
            key={category}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
