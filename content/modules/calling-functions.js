export default class {
  update(_el, event) {
    this.api.querySelector("div").innerHTML =
      `Got update from: ${event.target.innerHTML} at ${Date().toString()}`;
  }
}
