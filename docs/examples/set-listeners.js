export class Wires {
  $sawMouse(el, data) {
    el.innerHTML = `${data.type} at ${Date.now()}`;
  }
}
