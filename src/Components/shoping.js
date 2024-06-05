import React, { useState } from "react";
import "./totdo.css";

const ItemAdd = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue.trim()]);
      setInputValue("");
    }
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="item-add-container">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter a new item"
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <ul className="todo-list">
        {items.map((item, index) => (
          <li key={index} className="todo-item">
            <span>{item}</span>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemAdd;
