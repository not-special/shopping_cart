import Product from "./Product"
const ProductList = ({ inventory }) => {  
  return (
    <div className="product-listing">
      <h2>Products</h2>
        {inventory.map(item => <Product key={item._id.toString()} item={item} />)}   
    </div>
  )
}

export default ProductList;