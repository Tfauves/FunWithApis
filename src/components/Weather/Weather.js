import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../common/Container";
// import Splash from "../common/Splash";
import Form from "../common/Form"
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import Button from "../common/Button";

const Weather = () => {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const apiKey = "imperial&appid=11b6f4570321083e0d6d4f0cff727418";
  const [query, setQuery] = useState("javascript");
  const [q, setQ] = useState("");

  const handleSubmit = (e) => {
    setQuery(q);
  }

  useEffect(() => {
    const getWeather = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?zip=${query},us&units=${apiKey}`
        );
        console.log(res.data);
        setLoading(false);
        setWeather(res.data);
      } catch (err) {
        console.error(err.message);
      }
    };
    getWeather();
  }, [query]);

  const displayWeather = () => {
    return (
      <div>
        <Container>
            <h1>Current Temp: {Math.round(weather.main.temp)}&deg; F</h1>
            <h1>Feels Like: {Math.round(weather.main.feels_like)}&deg; F</h1>
        </Container>
      </div>
    );
  };

  return (
    <div style={{ width: "100%", justifyContent: "center" }}>
        <Form onSubmit={handleSubmit}>
        <InlineInputContainer>
          <Input 
            id="query"
            placeholder="Search"
            onChange={e => setQ(e.target.value)}
            value={q}
          />
          <Button>Search</Button>
        </InlineInputContainer>
      </Form>
      {loading ? <p>Loading...</p> : displayWeather()}
    </div>
  );
};

export default Weather;
