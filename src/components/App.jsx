// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import Product from "./Product";

export default function App() {
  return (
    <div>
      <h1>Best selling</h1>
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={9}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
    </div>
  );
}

function Gallery({ name, secondName, job, age = 30 }) {
  return (
    <ul>
      <li>
        His name :{name} {secondName}
      </li>
      <li>this person is {age}</li>
      <li>Your working place : {job}</li>
    </ul>
  );
}

export function Hero() {
  return (
    <div>
      <Gallery name="Vlad" secondName="Tykhyi" job="Mechanical operator" />
    </div>
  );
}

function Persoon({ naam, leeftijd }) {
  return (
    <p>
      {naam} is {leeftijd} jaar oud.
    </p>
  );
}

export function Human() {
  return <Persoon naam="Tom" leeftijd={30} />;
}
