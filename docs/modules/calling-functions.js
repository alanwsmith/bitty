export default class {
  update(event, _el) {
    this.api.querySelector("div").innerHTML =
      `Got update from: ${event.target.innerHTML} at ${Date().toString()}`;
  }
}
