import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./lib/store";
import * as serviceWorker from "./serviceWorker";

/*
Use Redux create store to run the state of the app

1. create store
2. add state to store
  - cart as array of item objects
  - inventory as array of product objects
3. connect handlers and reducers to update state
  - get products
  - add product
  - edit product
  - delete product
  
  - get cart items
  - add item to cart
  - checkout cart

*/

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
