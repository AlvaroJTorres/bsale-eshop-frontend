import SearchBar from "./assets/scripts/searchBar.js";
import Sidebar from "./assets/scripts/sidebar.js";

async function init() {
  const searchBar = new SearchBar();
  const sidebar = new Sidebar();

  searchBar.render();
  sidebar.render();
}

init();
