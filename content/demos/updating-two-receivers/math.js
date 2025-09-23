export default class {
  update(event, element) {
    console.log(element);
    console.log(event.target);
    if (event.target.value !== "") {
      element.innerHTML = event.target.value;
      this.api.send(event, "half");
    }
  }

  /*
  half(event, element) {
    console.log(element);
    if (event.target.value !== "") {
      element.innerHTML = event.target.value * 0.5;
    }
  }
  */
}
