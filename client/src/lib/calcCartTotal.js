export default function calcCartTotal (currentCart) {
  return currentCart.reduce((acc, cv) => {
    let extendedPrice = cv.quantity * cv.price;
    return acc + extendedPrice;
  }, 0);
}