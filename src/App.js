import React, { Component } from 'react';
import './App.css';

const cypher = "abcdefghijklmnopqrstuvwxyz";

class App extends Component {
  state = {
    entry: 'hello' 
  }
  
  subtractor = (num) => {
    while(num > 25){
      num -= 25;
    }
    return num;
  }

  letterShift = (event) => {
    let textInput = event.target.value;
    let textLen = textInput.length;
    let newLetter = textInput[textLen - 1]; // will need to split this off too. this takes the last letter of the input, the one we need to convert.
    let currIndex = cypher.indexOf(newLetter);
    if(currIndex === -1){
      this.setState({entry:textInput});
    } else {
      let newIndex = currIndex + 5 + textLen;
      this.setState({entry: textInput + cypher[this.subtractor(newIndex)]});
    }
  }

  
  render() {
    return (
      <textarea id="Typebox" type="text" onChange={(event) => this.letterShift(event)} value={this.state.entry}/>
    );
  }
}

export default App;
