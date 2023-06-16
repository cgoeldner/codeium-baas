import React from "react";
import Teaser from "./components/Teaser";
import Content from "./components/Content";
import DraggableList from "./components/DraggableList";
import SendSomeJson from "./components/SendSomeJson";

const App = () => {
  return (
    <div>
      <Teaser />
      <Content />
      <DraggableList />
      <SendSomeJson />
    </div>
  );
};

export default App;
