import { ProductsService } from "./assets/scripts/services/products_service.js";

async function init() {
  const productList = new ProductsService();
  const data = await productList.loadSearchProducts("bebida energetica");
  console.log(data);
}
init();
