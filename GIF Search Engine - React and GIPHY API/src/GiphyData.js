import React, {Component} from 'react';
import axios from 'axios';

class GiphyData extends Component
{
  // <img src = {images["fixed_height_still"]["url"]}/>
//    <video src =  {images["preview"]["mp4"]} autoPlay loop/>
constructor(props)
{
  super(props)
  let{
    id,
    url,
    images = ["fixed_height_still"],
    images2 = ["preview"],
    title,
  } = this.props.inputGiphyData;
  this.state =
  {
    id ,
    title,
    images,
  }
}
// this.setState((state) => ({ myVideoID_: id}) )

// setVideo = () =>
// {
//   this.setState((state) => ({ myVideo: document.getElementById() }) )
// }
here = () =>
{
  console.log("here");
}
render()
  {

    let pStyle = { marginTop: '0px'}



    return(
      <div className="center">
        <div className="headerForGiphy"> {/*GIPHYCARD HEADER*/}
          <p style = {pStyle}>{this.state.title.substring(0,this.state.title.length-3)}</p>
        </div>
        <br/>
        <video id = {this.state.id} src =  {this.state.images["preview"]["mp4"]} autoPlay loop onMouseOver = {this.here}/>
      </div>
    );
  }
}

export default GiphyData;
