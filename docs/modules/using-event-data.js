export default class {
  update(event, element) {
    element.innerHTML = `${event.type} ${Date.now()}`;
  }
}
