import React, {Component} from 'react';
import './App.css';
import ZipCode from './components/ZipCode.js';

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <ZipCode/>
      </div>
    )
  }
};

export default App;
