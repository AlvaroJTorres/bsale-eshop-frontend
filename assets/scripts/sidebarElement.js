export default function SidebarElement(categoryData) {
  this.data = categoryData;
  this.parentElement = document.querySelector(".js-sidebar");
  this.toString = function () {
    return `
      <li>${this.data.name}</li>
    `;
  };
}
