import React, { Component } from "react";
import "./App.css";
import Timer from "./timer";

var timer = 7000;
// function sec2time(timeInSeconds) {
//   var pad = function(num, size) { return ('000' + num).slice(size * -1); },
//   time = parseFloat(timeInSeconds).toFixed(3),
//   hours = Math.floor(time / 60 / 60),
//   minutes = Math.floor(time / 60) % 60,
//   seconds = Math.floor(time - minutes * 60),
//   milliseconds = time.slice(-3);

//   return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2) + ',' + pad(milliseconds, 3);
// }


class App extends Component {
  toHHMMSS=(seconds)=> {
    var h, m, s, result='';
    // HOURs
    h = Math.floor(seconds/3600);
    seconds -= h*3600;
    if(h){
        result = h<10 ? '0'+h+':' : h+':';
    }
    // MINUTEs
    m = Math.floor(seconds/60);
    seconds -= m*60;
    result += m<10 ? '0'+m+':' : m+':';
    // SECONDs
    s=seconds%60;
    result += s<10 ? '0'+s : s;
    return result;
}
  render() {
    return (
      <div className="App">
        <Timer convertfunction={this.toHHMMSS} timer={timer} />
      </div>
    );
  }
}

export default App;
