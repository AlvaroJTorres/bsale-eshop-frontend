import { CategoriesService } from "./services/categories_service.js";
import SidebarElement from "./sidebarElement.js";
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

Sidebar.prototype.render = function () {
  this.parentElement.innerHTML = this;
  this.renderCategories(".js-list");
};
