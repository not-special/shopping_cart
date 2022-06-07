import Product from "./Product"
const ProductList = ({ inventory }) => {  

console.log("ProductList", inventory)

  return (
    <div class="product-listing">
      <h2>Products</h2>
        {inventory.map(item => <Product key={item.id} item={item} />)}   
    </div>
  )
}

export default ProductList;