import React from "react";
import Header from "./header/Header";
import List from "./list/list";
import Complete from "./complete/complete";
import "./App.css"
// import Mainpage from "./wikipediaPage/Mainpage";

function TodoApp() {
  return (
    <>
      <div >
        <Header />
        <List />
        <Complete />
      </div>


    </>



  );
}

export default TodoApp;
