import React from "react";
import { Chart } from "../components/Chart";
import {bitcoinService} from '../services/bitcoinService.js';
import '../Sass/App.scss';

export class ChartsPage extends React.Component {
  state = {
    ExchangeData: null,
    MarketPrice: null
  };

 

   async componentDidMount() {
     this.setState({ExchangeData: await bitcoinService.getTradeVolume()})
     this.setState({MarketPrice: await bitcoinService.getMarketPrice()})
  }

  componentWillUnmount() {

  }

  render() {
    const {ExchangeData,MarketPrice} = this.state;
    return (
      <div className="charts-page">
        <h1>Charts Page</h1>
        {ExchangeData && <Chart title="Exchange Trade Volume (USD)" data={ExchangeData}/>}
        {MarketPrice && <Chart title="Market Price (USD)" data={MarketPrice}/>}
      </div>
    );
  }
}
