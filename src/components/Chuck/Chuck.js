import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../common/Container";
import Splash from "../common/Splash";
import splash from "../../assets/chuckSplash.jpg";

const Chuck = () => {
  const [joke, setJoke] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getJoke = async () => {
      try {
        const res = await axios.get("https://api.chucknorris.io/jokes/random");
        console.log(res.data);
        setLoading(false);
        setJoke(res.data);
      } catch (err) {
        console.error(err.message);
      }
    };

    getJoke();
  }, []);

  const displayJoke = () => {
    return (
      <Container>
        <Splash image={splash}>
          <h1
            style={{
              textShadow: "0 0 6px #f1f1f1, 0 0 5px #f1f1f1",
              marginTop: "3em",
              textAlign: "center",
              fontSize: "3em",
              letterSpacing: "13px",
              color: "#303030",
            }}
          >
            {joke.value}
          </h1>
        </Splash>
      </Container>
    );
  };

  return (
    <div style={{ width: "100%", justifyContent: "center" }}>
      {loading ? <p>Loading...</p> : displayJoke()}
    </div>
  );
};

export default Chuck;
