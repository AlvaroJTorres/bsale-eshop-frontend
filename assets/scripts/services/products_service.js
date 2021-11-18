import { BASE_URL, apiFetch } from "./api_fetch.js";

export function ProductsService() {
  if (!ProductsService.instance) {
    ProductsService.instance = this;
  }

  return ProductsService.instance;
}

ProductsService.prototype.loadSearchProducts = (query) =>
  apiFetch(`${BASE_URL}/products/${query}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
