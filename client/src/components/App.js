import React from "react";
import Header from "./Header";

/*
header
  > cart details
products list
  > product
    > display product
    > edit product
new product form
*/

// const Products = () => {

// }

// const Product = () => {

// }

// const EditForm = () => {

// }

// const AddForm = () => {

// }

const App = ({ inventory, cart }) => {  
  return (
    <div id="app">
      <Header cart={cart}/>
      <main>

      </main>
    </div>
  );
};

export default App;
