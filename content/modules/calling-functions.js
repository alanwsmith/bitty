export default class {
  update(event, _element) {
    this.api.querySelector("div").innerHTML = Date.now();
  }
}
