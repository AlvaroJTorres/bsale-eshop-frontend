import { BASE_URL, apiFetch } from "./api_fetch.js";

export function CategoriesService() {
  if (!CategoriesService.instance) {
    CategoriesService.instance = this;
  }

  return CategoriesService.instance;
}

CategoriesService.prototype.loadCategories = () =>
  apiFetch(`${BASE_URL}/categories`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
