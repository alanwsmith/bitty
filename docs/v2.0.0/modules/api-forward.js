export default class {
  first(event, _el) {
    this.api.forward(event, "second");
  }

  second(event, el) {
    const x = event.offsetX;
    const y = event.offsetY;
    el.innerHTML = `x: ${x} - y: ${y}`;
  }
}