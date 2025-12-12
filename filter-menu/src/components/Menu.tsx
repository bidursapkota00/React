import { type MenuItem as MenuItemType } from "../types/menu";
import MenuItem from "./MenuItem";
import "./Menu.css";

interface MenuProps {
  items: MenuItemType[];
}

const Menu = ({ items }: MenuProps) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        return <MenuItem key={menuItem.id} {...menuItem} />;
      })}
    </div>
  );
};

export default Menu;
