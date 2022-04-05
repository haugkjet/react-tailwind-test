import { useState } from "react";

function PriceTracker (props) {

    //let newTicker = props.ticker;

    const [ticker, setTicker] = useState(props.ticker);

    const clickHandler = ()  => {
        setTicker("Updated");
        console.log(ticker)
    };

    return <div className="flex">
                <div className="text-blue-500 font-bold text-sm ml-4">{ticker}</div>
                <div className="text-red-500 font-bold text-sm ml-4">{props.price}</div>
                <div className="text-yellow-500 font-bold text-sm ml-4 pr-4">{props.lastUpdate.toISOString()}</div>
                <button onClick={clickHandler}className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1">Get price</button>
            </div>
}

export default PriceTracker;