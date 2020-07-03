import React from 'react';
import './App.css';
import Unicode from './Unicode';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          Unicode Chart
        </header>
        <div className="page">
          <div className="content">
              <Unicode />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
