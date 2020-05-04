import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const landingPage = () => {
  return (
    <React.Fragment>
      <div
        style={{ backgroundImage: "url(" + "./images/react-logo.svg" + ")" }}
      >
        <img src="/images/ironhack-logo.svg" alt="Ironhack Logo" />
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn a Frontend framework from scratch, to become an Ninjs
          Developer
        </p>
        <button>Awesome!</button>
        <img src="./images/icon1.png" alt="" />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs.</p>
        <img src="./images/icon2.png" alt="" />
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state.</p>
        <img src="./images/icon3.png" alt="" />
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the component's.</p>
        <img src="./images/icon4.png" alt="" />
        <h2>JSX</h2>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </React.Fragment>
  );
};

ReactDOM.render(landingPage(), document.getElementById("root"));
