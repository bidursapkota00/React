import { type GroceryItem } from "../types/groceryItem";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import "./SingleItem.css";

interface SingleItemProps {
  item: GroceryItem;
  editCompleted: (itemId: string) => void;
  removeItem: (itemId: string) => void;
  setEditId: (itemId: string) => void;
}

const SingleItem = ({
  item,
  editCompleted,
  removeItem,
  setEditId,
}: SingleItemProps) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editCompleted(item.id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.completed ? "line-through" : "none",
        }}
      >
        {item.name}
      </p>

      <button
        className="btn icon-btn"
        type="button"
        onClick={() => setEditId(item.id)}
      >
        <FiEdit size={18} />
      </button>

      <button
        className="btn icon-btn remove-btn"
        type="button"
        onClick={() => removeItem(item.id)}
      >
        <FiTrash2 size={18} />
      </button>
    </div>
  );
};

export default SingleItem;
