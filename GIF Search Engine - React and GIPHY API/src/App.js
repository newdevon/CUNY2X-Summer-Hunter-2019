import React, {Component} from 'react';
import './App.css';
import ResultGiphyCard from './ResultGiphyCard'

class App extends Component
{
    constructor(props)
    {
      super(props)
      this.state =
      {
        inputGIPHY_:"",
        inputGIPHYHolder_:"",
      }
    }
    getInputGIPHY = (event) =>
    {
      this.setState({ inputGIPHYHolder_: event.target.value })
    }
    btnGIPHYSearch = () =>
    {
      this.setState((state) => ({ inputGIPHY_: state.inputGIPHYHolder_ }) )
    }

    render()
    {
      return(
      <div className="center"> {/*main DIV*/}
        <div className="center header">
          <h2>Seach APP </h2>
        </div>{/*HEADER END---*/}

        {/*CenterBox------------------------------------------------*/}
        <div className = "center searchBox">
          {/*GIPHY------------------------------------------------*/}
          <b> GIPHY: </b>
          <input value = {this.state.inputGIPHYHolder_} onChange = {this.getInputGIPHY} placeholder = "Type Giphy Here"/>
          <button onClick = {this.btnGIPHYSearch}> SEARCH</button>
          <div className ="horizontalScroll">
            <ResultGiphyCard inputGIPHY = {this.state.inputGIPHY_}/>
          </div>
        </div>{/*Center Box END*/}
      </div>//{/*<main DIV END>*/}
      );
    }
}

export default App;
