import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

const dummyData = [
  {
    id: 1,
    title: "Amazon Kindle E-reader",
    quantity: 5,
    price: 79.99,
  },
  {
    id: 2,
    title: "Apple 10.5-Inch iPad Pro",
    quantity: 3,
    price: 649.99,
  },
  {
    id: 3,
    title: "Yamaha Portable Keyboard",
    quantity: 2,
    price: 155.99,
  },
  {
    id: 4,
    title: "Tinker, Tailor, Soldier, Spy - A John le Carre Novel",
    quantity: 12,
    price: 13.74,
  },
];

const dummyCart = [
  {
    id: 1,
    title: "Amazon Kindle E-reader",
    quantity: 2,
    price: 79.99,
  },
  {
    id: 2,
    title: "Apple 10.5-Inch iPad Pro",
    quantity: 1,
    price: 649.99,
  }
];

ReactDOM.render(
  <React.StrictMode>
    <App inventory={dummyData} cart={dummyCart}/>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
