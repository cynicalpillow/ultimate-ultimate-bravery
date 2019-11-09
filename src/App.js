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
          <div className="container text-center">
            <div className="vertical-center">
              <div className="inner">
                <h1 className="mb-1">Ultimate ultimate bravery</h1>
                <a className="btn-primary btn-xl js-scroll-trigger" href="#/minecraft-is-better-than-fortnite">enter the rift</a>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
