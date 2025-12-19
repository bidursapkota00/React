import Items from "./components/Items";
// import { groceryItems } from "./data/groceryItems";
import { useEffect, useRef, useState } from "react";
import { type GroceryItem } from "./types/groceryItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { nanoid } from "nanoid";
import Form from "./components/Form";

const getLocalStorage = () => {
  let list = localStorage.getItem("grocery-list");
  if (list) {
    return JSON.parse(list) as GroceryItem[];
  }
  return [];
};

const setLocalStorage = (items: GroceryItem[]) => {
  localStorage.setItem("grocery-list", JSON.stringify(items));
};

const initialList = getLocalStorage();

const App = () => {
  const [items, setItems] = useState<GroceryItem[]>(initialList);
  const [editId, setEditId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (editId && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editId]);

  const editCompleted = (itemId: string) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const removeItem = (itemId: string) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("item deleted");
  };

  const addItem = (itemName: string) => {
    const newItem: GroceryItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("grocery item added");
  };

  const updateItemName = (newName: string) => {
    const newItems = items.map((item) => {
      if (item.id === editId) {
        return { ...item, name: newName };
      }
      return item;
    });
    setItems(newItems);
    setEditId(null);
    setLocalStorage(newItems);
    toast.success("item updated");
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form
        addItem={addItem}
        updateItemName={updateItemName}
        editItemId={editId}
        itemToEdit={items.find((item) => item.id === editId)}
        inputRef={inputRef}
      />
      <Items
        items={items}
        editCompleted={editCompleted}
        removeItem={removeItem}
        setEditId={setEditId}
      />
    </section>
  );
};

export default App;
