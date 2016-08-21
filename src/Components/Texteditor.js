import React, { Component } from 'react';
import '../index.css';
import marked from 'marked';

class Texteditor extends Component {
  constructor() {
    super();
  }
  handleChange(e) {
    const text = e.target.value;
    this.props.handleChange(text);
  }
  render() {
    return (
        <div className="texteditor">
          <textarea rows="22" onChange={this.handleChange.bind(this)} value={this.props.val} />
        </div>
    );
  }
}

export default Texteditor;
