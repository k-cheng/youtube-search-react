import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'; // need to include actual path for js files we write

const API_KEY = 'AIzaSyDw3PS2mKse5HrbKdilcGpInX0JS3wiOJo'; // lets us make requests to youtube

// new component
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}


// puts the component's generated HTML and puts it on the page

ReactDOM.render(<App />, document.querySelector('.container'))
