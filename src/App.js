import React from "react";
import Header from "./header/Header";
import List from "./list/list";
import Complete from "./complete/complete";
import "./App.css"

function TodoApp() {
  return (
    <div>
      <div>
        <Header />
        <List />
        <Complete />
      </div>
    </div>
  );
}

export default TodoApp;
