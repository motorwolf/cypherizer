import React, { Component } from 'react';
import './App.css';

const cypher = "abcdefghijklmnopqrstuvwxyz";

class App extends Component {
  state = {
    entry: '',
    translated: ''
  }
  
  subtractor = (num) => {
    while(num >= 26){
      //console.log(num);
      num -= 26;
    }
    return num;
  }

  letterShift = (event) => {
    let textInput = event.target.value; // this takes our input entirely
    let textLen = textInput.length; // just a shortcut for getting the length ... 15
    console.log(textLen);
    let newLetter = textInput[textLen - 1]; // this takes the very last letter entered, which is our target for translation. the rest of the string has already been translated ... a
    let currIndex = cypher.indexOf(newLetter.toLowerCase()); // this is the index of the newly entered letter in cypher ... 0 
    if(currIndex === -1){ // if it is not a letter, don't mess with it.
      this.setState({entry:textInput}); // just returns the current string
    } else {
      let restOfString = textInput.substring(0,(textLen - 1)); // this takes the rest of the string minus our newly entered letter.
      let newIndex = currIndex + 5 + textLen; // 0 +5 + 15 = 20 index is u
      this.setState({entry: restOfString + cypher[this.subtractor(newIndex)]});
      //console.log(this.subtractor());
      //let translatedLetter = cypher[this.subtractor(textLen) - 5];
      //console.log(translatedLetter);
    }
  }
  translator = (event) => {
    let toBeTranslated = this.state.entry.split("").map((letter,inx) => {
      let cyphIndex = cypher.indexOf(letter); // g. 27 word length
      if(cyphIndex === -1){
        return letter;
      } else {
        let len = (cyphIndex - 5) - (inx + 1); //1 - 28 = -27
        while(len < 0){
          len += cypher.length;
        }
        console.log(len);
        //return cypher[this.subtractor(len)];
        return cypher[len];
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
