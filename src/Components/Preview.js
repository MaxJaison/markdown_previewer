import React, { Component } from 'react';
import '../index.css';
import marked from 'marked';

class Preview extends Component {
  render() {
    return (
        <div className="preview" dangerouslySetInnerHTML={{__html: marked(this.props.val)}}></div>
    );
  }
}

export default Preview;
