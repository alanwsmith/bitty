export default class {
  updateWithEventData(event, element) {
    element.innerHTML = `${event.type} ${Date.now()}`;
  }
}
