import React, { useEffect, useState } from "react";
import axios from "axios";
// import Container from "../common/Container";
import Splash from "../common/Splash";
// import Form from "../common/Form";
// import InlineInputContainer from "../common/InlineInputContainer";
// import Input from "../common/Input";
// import Button from "../common/Button";
import { Card, InputGroup, FormControl, Button } from "react-bootstrap";
import cardImg from "../../assets/weatherCard.jpg";
import splash from "../../assets/weatherSplash.jpg";
import { weatherApiKey } from "../../config";

const Weather = () => {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("02215");
  const [q, setQ] = useState("");

  const handleSubmit = (e) => {
    setQuery(q);
  };

  useEffect(() => {
    const getWeather = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?zip=${query},us&units=${weatherApiKey}`
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
      <Splash image={splash}>
        <h1 style={{ marginTop: "1em", marginBottom: "25px", fontSize: "5em" }}>
          Todays Weather for {weather.name}
        </h1>
        <InputGroup className="mb-3">
          <FormControl
            id="query"
            placeholder="Enter your zip code"
            onChange={(e) => setQ(e.target.value)}
            value={q}
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={handleSubmit}
          >
            Search
          </Button>
        </InputGroup>
        <Card style={{}}>
          <Card.Img variant="top" src={cardImg} />
          <Card.Body>
            <Card.Text>
              <h2
                style={{
                  marginTop: "1em",
                  marginBottom: "20px",
                  fontSize: "3em",
                }}
              >
                {weather.weather[0].description}
              </h2>
              <h2
                style={{
                  marginTop: "1em",
                  marginBottom: "20px",
                  fontSize: "3em",
                }}
              >
                Temp: {Math.round(weather.main.temp)}&deg; F
              </h2>
              <h2 style={{ marginTop: "1em", fontSize: "3em" }}>
                Feels Like: {Math.round(weather.main.feels_like)}&deg; F
              </h2>
            </Card.Text>
          </Card.Body>
        </Card>
      </Splash>
    );
  };

  const displayZipSearch = () => {
    return (
      <div
        style={{ marginTop: "10em", width: "100%", justifyContent: "center" }}
      >
        <InputGroup className="mb-3">
          <FormControl
            id="query"
            placeholder="Search"
            onChange={(e) => setQ(e.target.value)}
            value={q}
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={handleSubmit}
          >
            Search
          </Button>
        </InputGroup>

        {/* 


        <Form onSubmit={handleSubmit}>
          <InlineInputContainer>
            <Input
              id="query"
              placeholder="Search"
              onChange={(e) => setQ(e.target.value)}
              value={q}
            />
            <Button style>Search</Button>
          </InlineInputContainer>
        </Form> */}
      </div>
    );
  };

  return <div>{loading ? <p>...loading</p> : displayWeather()}</div>;
};

export default Weather;
