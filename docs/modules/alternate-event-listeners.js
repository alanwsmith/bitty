export default class {
  sawMouse(el, event) {
    el.innerHTML = `${event.type} at ${Date.now()}`;
  }
}

