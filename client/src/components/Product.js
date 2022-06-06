import ProductDisplay from './ProductDisplay';
// import ProductEdit from './ProductEdit';

const Product = ({ item }) => {
  // state for editable

  
  // if (false) {
  //   return (
  //     <>
  //     <ProductDisplay />
  //     <ProductEdit />
  //     </>
  //   )
  // }

  return (
    <>
    <ProductDisplay item={item}/>
    </>
  );
}

export default Product;