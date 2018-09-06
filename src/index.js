import React, { Component } from "react";
import ReactDOM from "react-dom";
import env from "../env/google_api"
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";


const API_KEY = env.env;



// Create a new component. This component should produce som HTML.
class App extends Component {
  constructor(props){
    super(props);
    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: "surfboard"},  (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

//Take this component´s generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector(".container"));
