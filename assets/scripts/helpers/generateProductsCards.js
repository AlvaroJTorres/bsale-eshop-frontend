import ProductCard from "../productCard.js";
import STORE from "../store.js";

export function generateProductCards(parentSelector) {
  const container = document.querySelector(parentSelector);
  const productCards = STORE.products.map((productData) => {
    return new ProductCard(productData);
  });
  container.innerHTML = productCards.join("");
  return productCards;
}
