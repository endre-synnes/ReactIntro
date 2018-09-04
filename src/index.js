import React from "react";
import ReactDOM from "react-dom";
import env from "../env/google_api"
import SearchBar from "./components/search_bar";

const API_KEY = env.env;

// Create a new component. This component should produce som HTML.
const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  );
};

//Take this component´s generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector(".container"));
