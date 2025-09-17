export default class {
  update(event, el) {
    el.innerHTML = `${event.type} event at ${Date().toString()}`;
  }
}
