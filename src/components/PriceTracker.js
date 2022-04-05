import { useState } from "react";

function PriceTracker (props) {

    const [price, setPrice] = useState(props.price);
    async function fetchCryptoData() {
      console.log(`Fetching crypto data for ticker: ${props.ticker}`);

      const req = `https://api.coinbase.com/v2/prices/${props.ticker}-EUR/spot`
      const response = await fetch (req);
      const data = await response.json(response);
      const res = await data; 
     
      setPrice(res.data.amount);      
      return res;
      }

    const clickHandler = ()  => {
        fetchCryptoData();
    };

    return <div className="flex">
                <div className="text-blue-500 font-bold text-sm ml-4">{props.ticker}</div>
                <div className="text-red-500 font-bold text-sm ml-4">{price}</div>
                <div className="text-yellow-500 font-bold text-sm ml-4 pr-4">{props.lastUpdate.toISOString()}</div>
                <button onClick={clickHandler}className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1">Get price</button>
            </div>
}

export default PriceTracker;




