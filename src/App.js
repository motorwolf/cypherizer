import React, { Component } from 'react';
import './App.css';

const cypher = "abcdefghijklmnopqrstuvwxyz";

class App extends Component {
  state = {
    entry: '',
    translated: ''
  }
  
  subtractor = (num) => {
    while(num > 25){
      //console.log(num);
      num -= 25;
    }
    return num;
  }

  letterShift = (event) => {
    let textInput = event.target.value;
    let textLen = textInput.length;
    let newLetter = textInput[textLen - 1]; // will need to split this off too. this takes the last letter of the input, the one we need to convert.
    //let translation = this.state.translated + newLetter; 
    //this.setState({translated: translation});
    //console.log(this.state.translation);
    let currIndex = cypher.indexOf(newLetter.toLowerCase());
    if(currIndex === -1){
      this.setState({entry:textInput});
    } else {
      let restOfString = textInput.substring(0,(textLen - 1));
      //console.log(restOfString);
      let newIndex = currIndex + 5 + textLen;
      this.setState({entry: restOfString + cypher[this.subtractor(newIndex)]});
      //console.log(this.subtractor());
      //let translatedLetter = cypher[this.subtractor(textLen) - 5];
      //console.log(translatedLetter);
    }
  }
  translator = (event) => {
    let toBeTranslated = this.state.entry.split("").map((letter,inx) => {
      let cyphIndex = cypher.indexOf(letter);
      if(cyphIndex === -1){
        return letter;
      } else {
        let len = inx + 6 + cyphIndex;
        return cypher[this.subtractor(len)];
      }
    }).join("");
    this.setState(
      {translated : toBeTranslated}
    );
  }

  
  render() {
    return (
      <React.Fragment>
        <textarea id="Typebox" type="text" onChange={(event) => this.letterShift(event)} value={this.state.entry}/>
        <button onClick={(e) => this.translator(e)}>Translate!</button>
        <p>{this.state.translated}</p>
      </React.Fragment>
      );
  }
}

export default App;
