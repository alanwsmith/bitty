export default class {
  getCoords(event, el) {
    el.innerHTML = `x: ${event.offsetX} - y: ${event.offsetY}`;
  }
}