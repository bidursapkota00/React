import { useState, type FormEvent, useEffect } from "react";
import { toast } from "react-toastify";
import { type GroceryItem } from "../types/groceryItem";
import "./Form.css";

interface FormProps {
  addItem: (itemName: string) => void;
  editItemId: string | null;
  updateItemName: (itemName: string) => void;
  itemToEdit?: GroceryItem;
  inputRef: React.RefObject<HTMLInputElement | null>;
}

const Form = ({
  addItem,
  editItemId,
  updateItemName,
  itemToEdit,
  inputRef,
}: FormProps) => {
  const [newItemName, setNewItemName] = useState("");

  useEffect(() => {
    if (itemToEdit) {
      setNewItemName(itemToEdit.name);
    } else {
      setNewItemName("");
    }
  }, [itemToEdit]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error("please provide value");
      return;
    }
    if (editItemId) {
      updateItemName(newItemName);
    } else {
      addItem(newItemName);
    }
    setNewItemName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          ref={inputRef}
          placeholder="e.g. eggs"
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn">
          {editItemId ? "edit item" : "add item"}
        </button>
      </div>
    </form>
  );
};

export default Form;
