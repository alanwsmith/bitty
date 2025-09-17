export default class {
  forward(_event, el) {
    el.innerHTML = `Clicked: ${Date().toString()}`;
  }

  update(event, _el) {
    this.api.send(event, "forward");
  }
}
