export default function ErrorMessage() {
  this.toString = function () {
    return `
    <div class="container">
      <p>Esa categoría no se encuentra disponible, favor de ingresar una de la lista</p>
      <p>Gracias!</p>         
    </div>
    `;
  };
}
