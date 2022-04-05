import logo from './logo.svg';
import './App.css';
import PriceTracker from './components/PriceTracker';

function App() {
      const pricesToTrack = [
      {ticker : 'BTC', price: '25609.9', lastUpdate : new Date(2019,5,6)},
      {ticker : 'ETH', price: '3609.9', lastUpdate : new Date(2020,5,6)},
      {ticker : 'ADA', price: '1.9', lastUpdate : new Date(2021,5,6)},
      {ticker : 'SOL', price: '9.9', lastUpdate : new Date(2021,4,3)}
    ];

    return (

    <div className="App">
 
        <h1 className="text-3xl text-green-500 font-bold">Welcome</h1>
      
      <PriceTracker ticker={pricesToTrack[0].ticker} price={pricesToTrack[0].price} lastUpdate={pricesToTrack[0].lastUpdate} ></PriceTracker>
      <PriceTracker ticker={pricesToTrack[1].ticker} price={pricesToTrack[1].price} lastUpdate={pricesToTrack[1].lastUpdate}></PriceTracker>
      <PriceTracker ticker={pricesToTrack[2].ticker} price={pricesToTrack[2].price} lastUpdate={pricesToTrack[2].lastUpdate}></PriceTracker>
      <PriceTracker ticker={pricesToTrack[3].ticker} price={pricesToTrack[3].price} lastUpdate={pricesToTrack[3].lastUpdate}></PriceTracker>

     

    </div>
  );
}

export default App;
