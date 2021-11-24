import { generateProductCards } from "./assets/scripts/helpers/generateProductsCards.js";
import SearchBar from "./assets/scripts/searchBar.js";
import { ProductsService } from "./assets/scripts/services/products_service.js";
import Sidebar from "./assets/scripts/sidebar.js";
import STORE from "./assets/scripts/store.js";

async function init() {
  const searchBar = new SearchBar();
  const sidebar = new Sidebar();
  const productService = new ProductsService();
  const productsList = await productService.loadProducts();
  STORE.products = productsList;

  searchBar.render();
  generateProductCards(".js-products_list");
  sidebar.render();
}

init();
