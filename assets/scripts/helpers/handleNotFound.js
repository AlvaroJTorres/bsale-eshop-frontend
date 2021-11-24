import ErrorMessage from "../errorMessage.js";

export function handleNotFound(parentSelector) {
  const container = document.querySelector(parentSelector);
  container.innerHTML = new ErrorMessage();
}
