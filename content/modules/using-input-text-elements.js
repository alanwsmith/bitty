export default class {
  update(event, element) {
    if (event.target.value !== "") {
      element.innerHTML = event.target.value;
    }
  }
}

