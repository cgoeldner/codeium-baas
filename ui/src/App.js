import React from "react";
import Teaser from "./components/Teaser";
import Content from "./components/Content";
import DraggableList from "./components/DraggableList";
import SendSomeJson from "./components/SendSomeJson";

const items = [
  {
    id: "item-1",
    content: "Item 1",
  },
  {
    id: "item-2",
    content: "Item 2",
  },
  {
    lol: "item-3",
    content: "Item 3",
  },
];

const App = () => {
  return (
    <div>
      <Teaser />
      <Content />
      <DraggableList items={items} />
      <SendSomeJson />
    </div>
  );
};

export default App;
