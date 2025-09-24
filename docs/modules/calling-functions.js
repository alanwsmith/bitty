export default class {
  updateWithoutReceiver(_event, _element) {
    this.api.querySelector("div").innerHTML = Date.now();
  }
}
