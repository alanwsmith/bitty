export default class {
  sawMouse(event, el) {
    el.innerHTML = `${event.type} at ${Date.now()}`;
  }
}

