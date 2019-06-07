import React, {Component} from 'react';
import axios from 'axios';
import GiphyData from './GiphyData';

class ResultGiphyCard extends Component
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      result : "",
      myKey_: "A7uzDSOUd1pikBLFrRbmlQbHzft2T83r",
      inputAddress_ : 'http://api.giphy.com/v1/gifs/search?q=',
      rawData:[],
    };
  }

  fetchZipData()
  {
    axios.get(this.state.inputAddress_ + this.props.inputGIPHY + '&api_key='+this.state.myKey_).then(response =>
    {
      const result = response.data
      this.setState({rawData: result["data"]});
    }).catch(err => console.log(err), this.setState({result: "Not Found"}));
  }

  componentDidUpdate (prevProps)
  {
     if (prevProps.inputGIPHY !== this.props.inputGIPHY)
      this.fetchZipData();
  }

  render()
  {
    let myGiphyData = this.state.rawData.map((giphyData, index) =>
    {
      return(
        <div className = "resultGiphyBox" key = {giphyData.id}>
          <li><GiphyData inputGiphyData = {giphyData} /> </li>
        </div>
      )
    })
    return(
      <div className="center ">
        <ul className = "flexContainerForGiphy">
        {myGiphyData}
        </ul>
      </div>
    );
  }
}
export default ResultGiphyCard;
