export default class {
  update(event, el) {
    const x = event.offsetX;
    const y = event.offsetY;
    el.innerHTML = `x: ${x} - y: ${y}`;
  }
}