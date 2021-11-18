export default function ProductCard(productData) {
  this.data = productData;
  this.toString = function () {
    return `
    <div class="product_card">
      <div class="product_info">
        ${
          this.data.url_image
            ? `<img src="${this.data.url_image}" alt="${this.data.name}" />`
            : `<img src="assets/images/imagen-no-disponible.jpg" />`
        }
        <p class="product_name">${this.data.name}</p>
      </div>
      <div class="product_footer">
        <p class="product_price">$${this.data.price}</p>
        <div class="product_shop">
          <i class="fas fa-cart-plus"></i>
        </div>
      </div>          
    </div>
    `;
  };
}
