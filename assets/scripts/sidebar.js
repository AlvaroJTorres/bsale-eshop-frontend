import { generateProductCards } from "./helpers/generateProductsCards.js";
import { CategoriesService } from "./services/categories_service.js";
import SidebarElement from "./sidebarElement.js";
import STORE from "./store.js";
import { handleNotFound } from "./helpers/handleNotFound.js";

export default function Sidebar() {
  this.parentElement = document.querySelector(".js-sidebar");
  this.toString = function () {
    return `
      <h1 class="sidebar_title">Categorias:</h1>
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

Sidebar.prototype.handleClick = function () {
  const categoryList = document.querySelector(".js-list");

  categoryList.addEventListener("click", async (e) => {
    if (e.target.id == "js-category") {
      e.preventDefault();

      const category = +e.target.dataset.id;
      const filteredProductsList = STORE.products.filter(
        (product) => product.category == category
      );
      STORE.products = filteredProductsList;
      STORE.products.length > 0
        ? generateProductCards(".js-products_list")
        : handleNotFound(".js-products_list");
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
