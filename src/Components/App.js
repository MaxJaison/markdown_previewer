import React, { Component } from 'react';
import Texteditor from './Texteditor';
import Preview from './Preview'
import '../index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {val: "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n"};
  }
  handleChange(val) {
    this.setState({val});
  };
  render() {
    return (
      <div className="container">
          <Texteditor handleChange={this.handleChange.bind(this)} val={this.state.val} />
          <Preview  val={this.state.val} />
      </div>
    );
  }
}

export default App;
