export default function ErrorMessage() {
  this.toString = function () {
    return `
    <div class="product_card">
      <h1>Esa categoría no existe, favor de ingresar una de la lista</h1>         
    </div>
    `;
  };
}
