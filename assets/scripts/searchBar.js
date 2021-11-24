import STORE from "./store.js";
import { ProductsService } from "./services/products_service.js";
import { generateProductCards } from "./helpers/generateProductsCards.js";
import { handleNotFound } from "./helpers/handleNotFound.js";

export default function SearchBar() {
  this.parentElement = document.querySelector(".js-header");
  this.toString = function () {
    return `
      <h1 class="header_title">Bsale Test</h1>
      <form class="search-bar">
        <input type="text" name="searchBar" id="searchBar" placeholder="Look for a product..."/>
        <button class="search-bar_submit">
          <i class="fas fa-search"></i>
        </button>
      </form>
      <div class="cart">
        <i class="fas fa-shopping-cart"></i>
      </div>
    `;
  };
}

SearchBar.prototype.handleSearch = function () {
  const form = document.querySelector(".search-bar");
  const searchBar = document.getElementById("searchBar");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      const productsService = new ProductsService();
      const query = searchBar.value.toUpperCase().trim();
      const productsList = await productsService.loadSearchProducts(query);
      STORE.products = productsList;
      STORE.products.length > 0
        ? generateProductCards(".js-products_list")
        : handleNotFound(".js-products_list");
    } catch (e) {
      alert(e);
    }
  });
};

SearchBar.prototype.addEventListener = function () {
  this.handleSearch();
};

SearchBar.prototype.render = function () {
  this.parentElement.innerHTML = this;
  this.addEventListener();
};
