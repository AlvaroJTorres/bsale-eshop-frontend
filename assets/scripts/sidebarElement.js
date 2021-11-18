export default function SidebarElement(categoryData) {
  this.data = categoryData;
  this.parentElement = document.querySelector(".js-sidebar");
  this.toString = function () {
    return `
      <li id="js-category">${this.data.name}</li>
    `;
  };
}
