export default function ErrorMessage() {
  this.toString = function () {
    return `
    <div class="container">
      <p>No existe un producto con ese término</p>
      <p>Gracias!</p>         
    </div>
    `;
  };
}
