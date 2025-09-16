export default class {
  update(_el, _event) {
    this.api.querySelector("div").innerHTML =
      `Updated at: ${Date().toString()}`;
  }
}
