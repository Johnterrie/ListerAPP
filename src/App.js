import React from "react";
import Header from "./header/Header";
import List from "./list/list";
import Complete from "./complete/complete";
import "./App.css"
import Wikipedia from "./wikipedia/Wikipedia";


function TodoApp() {
  return (
    <>
      <div className="appOne" >
        <Header />
        <List />
        <Complete />
      </div>


      <div>
        <Wikipedia/>
      </div>


    </>



  );
}

export default TodoApp;
