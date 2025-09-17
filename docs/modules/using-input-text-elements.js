export default class {
  update(event, el) {
    if (event.target.value !== "") {
      el.innerHTML = event.target.value;
    }
  }
}

