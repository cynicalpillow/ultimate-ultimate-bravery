import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="home-page">
        <header className="masthead d-flex">
          <div className="container text-center my-auto">
            <h1 className="mb-1">Ultimate ultimate bravery</h1>
            <h3 className="mb-5" style={{color: "#eee", textShadow: "2px 2px 5px #111"}}>
              <em>ultimate bravery for the zoomers</em>
            </h3>
            <a className="btn btn-primary btn-xl js-scroll-trigger" href="#/minecraft-is-better-than-fortnite">click me for tft gang shit</a>
          </div>
          <div className="overlay"></div>
        </header>
      </div>
    );
  }
}

export default App;
