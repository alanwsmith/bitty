export default class {
  update(_el, _event) {
    this.api.querySelector("div").innerHTML =
      `Updated without data-receive attribute at${Date().toString()}`;
  }
}
