import React from "react";
import splash from "../../assets/consumeSplash.jpg";
import Splash from "../common/Splash";
import Container from "../common/Container";

const Home = () => {
  return (
    <Container>
      <Splash image={splash}>
        <h1
          style={{
            textShadow: "0 0 12px #f1f1f1, 0 0 5px #f1f1f1",
            marginTop: "3em",
            textAlign: "center",
            fontSize: "6em",
            letterSpacing: "33px",
            color: "#303030",
            fontFamily: 'Playball, cursive',
            fontWeight: "900"
          }}
        >
          Consume This
        </h1>
      </Splash>
    </Container>
  );
};

export default Home;
