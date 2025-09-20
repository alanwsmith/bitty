export default class {
  forward(_event, element) {
    element.innerHTML = Date.now();
  }

  update(event, _element) {
    this.api.send(event, "forward");
  }
}
