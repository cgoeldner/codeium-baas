import React, { useState } from "react";
import PropTypes from "prop-types";
import "./DraggableList.css";

function DraggableList({ items }) {
  const [stateItems, setStateItems] = useState(items);
  const [draggingIndex, setDraggingIndex] = useState(null);

  function handleDragStart(event, index) {
    setDraggingIndex(index);
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", index);
  }

  function handleDragOver(event, index) {
    event.preventDefault();
    if (index !== draggingIndex) {
      const newStateItems = [...stateItems];
      const itemToMove = newStateItems[draggingIndex];
      newStateItems.splice(draggingIndex, 1);
      newStateItems.splice(index, 0, itemToMove);
      setStateItems(newStateItems);
      setDraggingIndex(index);
    }
  }

  function handleDragEnd() {
    setDraggingIndex(null);
  }

  return (
    <ul className="draggable-list">
      {stateItems.map((item, index) => (
        <li
          key={item.id}
          className={`draggable-list-item ${
            index === draggingIndex ? "dragging" : ""
          }`}
          draggable="true"
          onDragStart={(event) => handleDragStart(event, index)}
          onDragOver={(event) => handleDragOver(event, index)}
          onDragEnd={handleDragEnd}
        >
          {item.content}
        </li>
      ))}
    </ul>
  );
}

DraggableList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DraggableList;
