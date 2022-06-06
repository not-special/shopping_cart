import React from 'react'

const AddProductForm = ({toggleVisibility, visible}) => {
  // const button = document.querySelector('.add-product-button')
  // console.log('button: ', button)
  // button.addEventListener('click', e => {
  //   e.preventDefault()
  //   console.log('clicked!')
  // })
	// const debuggingFunction = (event) => {
	// 	console.log('here!!!!');
	// 	console.log(toggleProductFormVisibility);
	// 	toggleProductFormVisibility(event);
	// }

	/*
	const [showAddForm, setShowAddForm] = useState(false)
	const addFormClass = showAddForm ? 'add-form visible' : 'add-form';
	const toggleForm = () => setShownAddForm(!showAddForm)

	<div class={addFormClass}
	onClick={toggleForm}
	*/

  return (
    <div className={`add-form ${visible ? 'visible' : ''}`}>
      <p><a class="button add-product-button" onClick={toggleVisibility}>Add A Product</a></p>
      <h3>Add Product</h3>
      <form>
        <div className="input-group">
          <label for="product-name">Product Name</label>
          <input type="text" id="product-name" value=""/>
        </div>

        <div className="input-group">
          <label for="product-price">Price</label>
          <input type="text" id="product-price" value=""/>
        </div>

        <div className="input-group">
          <label for="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value=""/>
        </div>

        <div className="actions form-actions">
          <a className="button">Add</a>
          <a className="button" onClick={toggleVisibility}>Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default AddProductForm