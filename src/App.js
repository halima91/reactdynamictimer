import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="division">
          <p>00:</p>
          <p>30:</p>
          <p>00</p>
        </div>

        <div className="time">
          <p>Hour</p>
          <p>Minute</p>
          <p>Second</p>
        </div>
      </div>
    );
  }
}

export default App;
