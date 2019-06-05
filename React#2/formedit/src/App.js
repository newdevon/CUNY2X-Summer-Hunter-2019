import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Form from './form'
import Folder from './folder'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Form/>
        <Folder/>
      </div>
      )
  }
};

export default App;
