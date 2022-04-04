function PriceTracker (props) {

    const ticker = 'BTC';
    const price = '24526.4';

    const lastDate = new Date (2022,4,4);

    return <div class="flex">
                <div class="text-blue-500 font-bold text-sm ml-4">{props.ticker}</div>
                <div class="text-red-500 font-bold text-sm ml-4">{props.price}</div>
                <div class="text-yellow-500 font-bold text-sm ml-4">{props.lastDate.toISOString()}</div>
            </div>
}

export default PriceTracker;