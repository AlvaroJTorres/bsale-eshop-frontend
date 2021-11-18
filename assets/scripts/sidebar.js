import { CategoriesService } from "./services/categories_service.js";
import { ProductsService } from "./services/products_service.js";
import SidebarElement from "./sidebarElement.js";
import ProductCard from "./productCard.js";
import STORE from "./store.js";

export default function Sidebar() {
  this.parentElement = document.querySelector(".js-sidebar");
  this.toString = function () {
    return `
      <h1>Categorias:</h1>
      <ul class="js-list"></ul>
    `;
  };
}

Sidebar.prototype.renderCategories = async function (parentSelector) {
  const categoriesService = new CategoriesService();
  const container = document.querySelector(parentSelector);
  const categoryData = await categoriesService.loadCategories();
  STORE.categories = categoryData;
  const categories = STORE.categories.map((categoryData) => {
    return new SidebarElement(categoryData);
  });
  container.innerHTML = categories.join("");
  return categories;
};

Sidebar.prototype.generateProductCards = function (parentSelector) {
  const container = document.querySelector(parentSelector);
  const productCards = STORE.products.map((productData) => {
    return new ProductCard(productData);
  });
  container.innerHTML = productCards.join("");
  return productCards;
};

Sidebar.prototype.handleClick = function () {
  const categoryList = document.querySelector(".js-list");

  categoryList.addEventListener("click", async (e) => {
    if (e.target.id == "js-category") {
      e.preventDefault();
      console.log(e.target.innerText);
      try {
        const productsService = new ProductsService();
        const query = e.target.innerText;
        const productsList = await productsService.loadSearchProducts(query);
        STORE.products = productsList;
        this.generateProductCards(".js-products_list");
      } catch (e) {
        alert(e.message);
      }
    }
  });
};

Sidebar.prototype.addEventListener = function () {
  this.handleClick();
};

Sidebar.prototype.render = function () {
  this.parentElement.innerHTML = this;
  this.renderCategories(".js-list");
  this.addEventListener();
};
