export default class {
  sawMouse(event, element) {
    element.innerHTML = `${event.type} at ${Date.now()}`;
  }
}

