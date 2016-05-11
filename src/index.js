import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; // need to include actual path for js files we write

const API_KEY = 'AIzaSyDw3PS2mKse5HrbKdilcGpInX0JS3wiOJo'; // lets us make requests to youtube


// new component - want app to keep track of videos by recording them on its state
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      //this is equivalent of this.setState({ videos: videos})
      // can only do this when key and property have the same variable name
      this.setState({ videos });
    });
  }

  render() {

    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}


// puts the component's generated HTML and puts it on the page

ReactDOM.render(<App />, document.querySelector('.container'))
