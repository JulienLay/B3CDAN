import React from "react";

interface ItemListProps {
  items: string[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <ul style={{ padding: 0 }}>
      {items.map((item, index) => (
        <li key={index} style={{ color: "green" }}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
