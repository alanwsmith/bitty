export default class {
  forward(_event, element) {
    element.innerHTML = `Clicked: ${Date().toString()}`;
  }

  update(event, _element) {
    this.api.send(event, "forward");
  }
}
