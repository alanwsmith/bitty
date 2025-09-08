export default class {
  update(el, event) {
    el.innerHTML = `${event.type} event at ${Date().toString()}`;
  }
}
