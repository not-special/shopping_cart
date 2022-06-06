const ProductDisplay = ({item})=> {
  return (
    <div class="product">
          <div class="product-details">
            <h3>{item.title}</h3>
            <p class="price">{item.price}</p>
            <p class="quantity">{item.quantity} left in stock</p>
            <div class="actions product-actions">
              <a href="/" class="button add-to-cart">Add to Cart</a>
              <a href="/" class="button edit">Edit</a>
            </div>
            <a href="/" class="delete-button"><span>X</span></a>
          </div>
        </div>
  );
}

export default ProductDisplay;