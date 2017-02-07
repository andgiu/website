import './scss/style.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  render() {
    return(
      <div id="canvas-holder" ref="webgl" />
    )
  }

}

ReactDOM.render(<App />, document.getElementById('application'));
