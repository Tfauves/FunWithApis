import React, { useEffect, useState } from 'react';
import axios from "axios";
import { coinApiKey } from '../../config';
import Coin from './Coin';

const Coins = () => {
    const [coins, setCoins] = useState({});
    const [loading, setLoading] = useState(true);
   
    

    useEffect(() => {
        const getCoins = async () => {
            try {
                const res = await axios.get(
                    `https://coinranking1.p.rapidapi.com/stats`,
                   
                    {
                        headers: {
                          "X-RapidAPI-Key": `${coinApiKey}`
                        }
                    }
                );
                console.log(res.data);
                setLoading(false);
                setCoins(res.data)
            } catch (err) {
                console.error(err.message);
            }
        };
        getCoins();
    },[]);

    const displayCoins = () => {
        return (
            <h1>{coins.data.newestCoins.map((coin, i) => (<Coin coin={coin} key={coin.id} />))}</h1>
        )
    }

    return <div>{loading ? <p>...loading</p> : displayCoins()}</div>;

}
export default Coins;