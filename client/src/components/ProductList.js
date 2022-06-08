import Product from "./Product"
const ProductList = ({ inventory, onEdit, onDelete, onAddToCart }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
        {inventory.map(item => 
          <Product 
            key={item._id.toString()} 
            item={item} 
            onEdit={onEdit}
            onDelete={onDelete}
            onAddToCart={onAddToCart}
          />)
        }   
    </div>
  )
}

export default ProductList;