import React, { useEffect, useState } from "react";

const ItemsList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div>
      <h2>Items List</h2>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name} - ${item.price}  {/* Corrected */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;
