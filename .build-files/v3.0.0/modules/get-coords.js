export default class {
  coords(event, el) {
    el.innerHTML = `x: ${event.offsetX} - y: ${event.offsetY}`;
  }
}


