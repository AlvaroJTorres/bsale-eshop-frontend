export default function SearchBar() {
  this.parentElement = document.querySelector(".js-header");
  this.toString = function () {
    return `
      <h1 class="header_title">Bsale Test</h1>
      <div class="search-bar">
        <input type="text" name="searchBar" id="searchBar" placeholder="Type a category from the list..."/>
        <div class="search-bar_submit">
          <i class="fas fa-search"></i>
        </div>
      </div>
      <div class="cart">
        <i class="fas fa-shopping-cart"></i>
      </div>
    `;
  };
}

SearchBar.prototype.render = function () {
  this.parentElement.innerHTML = this;
};
