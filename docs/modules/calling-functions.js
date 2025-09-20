export default class {
  update(event, _element) {
    this.api.querySelector("div").innerHTML =
      `Got update from: ${event.target.innerHTML} at ${Date().toString()}`;
  }
}
