import React, { useState, useEffect } from "react";
import logo from "./wiki-logo.png";
import axios from "axios";
import WikiItems from "./WikiItems";
import "./wiki.css";

const Wikipedia = () => {
  const [content, setContent] = useState([]);
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");

  const url =
    "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=john";

  const handleChange = (e) => {
    // e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleSubmit = (input) => {
    setSearch(input);
  };

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(url);
      const data = response.data;
      const resData = data.query.search;
      setContent(resData);
      //   console.log(resData);
    };

    getData();
  }, []);

  return (
    <>
      <div>
        <h1 className="header">Wikipedia App</h1>
        <div className="image-div">
          <img className="image-world" src={logo} alt="wikilogo" />
        </div>

        <form
          className="form-div"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(inputValue);
          }}
        >
          <input className="input" type="text" onChange={handleChange} />
          <button className="btn-one" type="submit">
            SUBMIT
          </button>
        </form>
      </div>

      <WikiItems 
      content={content}
      />

    </>
  );
};

export default Wikipedia;
