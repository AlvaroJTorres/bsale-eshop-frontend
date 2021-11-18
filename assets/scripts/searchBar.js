import STORE from "./store.js";
import { ProductsService } from "./services/products_service.js";

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
        console.log(STORE.products);
      } catch (e) {
        alert(e.message);
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
