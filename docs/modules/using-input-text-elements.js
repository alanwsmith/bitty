export default class {
  updateFromTextInput(event, element) {
    if (event.target.value !== "") {
      element.innerHTML = event.target.value;
    }
  }
}
