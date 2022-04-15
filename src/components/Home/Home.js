import React from "react";
import splash from "../../assets/consumeSplash.jpg";
import Splash from "../common/Splash";
import Container from "../common/Container";

const Home = () => {
  return (
    <Container>
      <Splash
        image={splash}
        style={{
          textAlign: "center",
          fontSize: "3em",
          letterSpacing: "13px",
        }}
      >
        <h1>Consume This</h1>
      </Splash>
    </Container>
  );
};

export default Home;
