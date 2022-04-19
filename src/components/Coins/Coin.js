import React from "react";
import BorderCard from "../common/BorderCard";

const Coin = (props) => {
    const {symbol, name, iconUrl, coinrankingUrl} = props.coin;

    return (
        <BorderCard >
            <h2>{symbol}</h2>
            <h2>{name}</h2>
            <img src={iconUrl} alt="coin icon" />
            {/* <h2>{coinrankingUrl}</h2> */}
        </BorderCard>
    )

}

export default Coin;
