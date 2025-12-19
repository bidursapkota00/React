import SingleItem from "./SingleItem";
import { type GroceryItem } from "../types/groceryItem";
import "./Items.css";

interface ItemsProps {
  items: GroceryItem[];
  editCompleted: (itemId: string) => void;
  removeItem: (itemId: string) => void;
  setEditId: (itemId: string) => void;
}

const Items = ({ items, editCompleted, removeItem, setEditId }: ItemsProps) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            editCompleted={editCompleted}
            removeItem={removeItem}
            setEditId={setEditId}
          />
        );
      })}
    </div>
  );
};

export default Items;
