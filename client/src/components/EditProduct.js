const ProductEdit = ({ title, price, quantity })=> {

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div className="input-group">
          <label for="product-name">Product Name</label>
          <input type="text" id="product-name" value={title} />
        </div>

        <div className="input-group">
          <label for="product-price">Price</label>
          <input type="text" id="product-price" value={price} />
        </div>

        <div className="input-group">
          <label for="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={quantity} />
        </div>

        <div className="actions form-actions">
          <a href="/#" className="button">Update</a>
          <a href="/#" className="button">Cancel</a>
        </div>
      </form>
    </div>
  );
}

export default ProductEdit;