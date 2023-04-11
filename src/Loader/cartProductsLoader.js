import { getShoppingCart } from "../Utilities/LocalStorage";

const cartProductsLoader = async () => {
  const loadedProducts = await fetch("jobData.json");
  const products = await loadedProducts.json();
  const storedCart = getShoppingCart();
  const savedCart = [];
  for (const id in storedCart) {
    const addedProduct = products.find((product) => product.id === id);
    if (addedProduct) {
      savedCart.push(addedProduct);
    }
  }
  return savedCart;
};
export default cartProductsLoader;
