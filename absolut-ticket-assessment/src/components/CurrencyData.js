import { useState, useEffect } from "react"

const URL = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USDT&e=Binance";
const staticValue = 9.999999;

export default function CurrencyData () {
    const [data, setData] = useState();
    const [count, setCount] = useState(0);
    const [dataArray, setDataArray] = useState([]);

    const fetchData = async () => {
        const fetchedData = await (
            await fetch(URL)
        ).json();

        const value = parseFloat(fetchedData.USDT) + staticValue;
        setData(value);

        const timestamp = new Date().toJSON();
        const log = [value, timestamp];
        
        const newDataArray = dataArray;
        newDataArray.push(log)

        setDataArray(newDataArray);
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            fetchData();
            setCount(count+1);
        }, 100)

        return () => {
            clearTimeout(timeout);
        }
        
    }, [count]);

    const handleSubmit = (e) => {
        e.preventDefault();

        let csvContent = "data:text/csv;charset=utf-8," + dataArray.map(e => e.join(",")).join("\n");

        let encodedUri = encodeURI(csvContent);
        let link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "log.csv");
        document.body.appendChild(link);

        link.click();
    }

    return (
        <div>
            <p>Current value is USDT={data}</p>
            <p>{count} logs stored</p>

            <form onSubmit={handleSubmit}>
                <button type='submit'>Save logs to csv file</button>
            </form>
        </div>
    )
}