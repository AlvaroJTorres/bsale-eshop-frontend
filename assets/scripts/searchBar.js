import STORE from "./store.js";
import { ProductsService } from "./services/products_service.js";
import ProductCard from "./productCard.js";
import ErrorMessage from "./errorMessage.js";

export default function SearchBar() {
  this.parentElement = document.querySelector(".js-header");
  this.toString = function () {
    return `
      <h1 class="header_title">Bsale Test</h1>
      <div class="search-bar">
        <input type="text" name="searchBar" id="searchBar" placeholder="Type a category from the list..."/>
        <div class="search-bar_submit">
          <i class="fas fa-search"></i>
        </div>
      </div>
      <div class="cart">
        <i class="fas fa-shopping-cart"></i>
      </div>
    `;
  };
}

SearchBar.prototype.generateProductCards = function (parentSelector) {
  const container = document.querySelector(parentSelector);
  const productCards = STORE.products.map((productData) => {
    return new ProductCard(productData);
  });
  container.innerHTML = productCards.join("");
  return productCards;
};

SearchBar.prototype.handleNotFound = function (parentSelector) {
  const container = document.querySelector(parentSelector);
  container.innerHTML = new ErrorMessage();
};

SearchBar.prototype.handleSearch = function () {
  const searchButton = document.querySelector(".search-bar_submit");
  const searchBar = document.getElementById("searchBar");

  searchButton.addEventListener("click", async (e) => {
    if (searchButton) {
      e.preventDefault();
      try {
        const productsService = new ProductsService();
        const productsList = await productsService.loadSearchProducts(
          searchBar.value
        );
        STORE.products = productsList;
        this.generateProductCards(".js-products_list");
      } catch (e) {
        this.handleNotFound(".js-products_list");
      }
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
