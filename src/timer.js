import React, { Component } from "react";
import "./timer.css";

class Timer extends Component {
  //   sec2time(timeInSeconds) {
  //     var pad = function(num, size) {
  //         return ("000" + num).slice(size * -1);
  //       },
  //       time = parseFloat(timeInSeconds).toFixed(3),
  //       hours = Math.floor(time / 60 / 60),
  //       minutes = Math.floor(time / 60) % 60,
  //       seconds = Math.floor(time - minutes * 60),
  //       milliseconds = time.slice(-3);

  //     return (
  //       pad(hours, 2) +
  //       ":" +
  //       pad(minutes, 2) +
  //       ":" +
  //       pad(seconds, 2) +
  //       "," +
  //       pad(milliseconds, 3)
  //     );
  //   }
  
  render() {
    console.log(this.props.time);
    return (
      <div className="containerglobal">
        <h1>{this.props.convertfunction(this.props.timer)}</h1>

        {/* <div className="division">
          <p>00:</p>
          <p>30:</p>
          <p>00</p>
        </div>

        <div className="time">
          <p>Hour</p>
          <p>Minute</p>
          <p>Second</p>
        </div>

        <div className="btn">
          <button className="btn1">Start</button>
          <button>Reset</button>
        </div> */}
      </div>
    );
  }
}

export default Timer;
