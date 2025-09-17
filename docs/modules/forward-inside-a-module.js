export default class {
  forward(el, event) {
    el.innerHTML = `Clicked: ${Date().toString()}`;
  }

  update(_el, event) {
    this.api.send("forward", event);
  }
}
