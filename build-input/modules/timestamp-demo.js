export default class {
  updateTimestamp(el, _event) {
    el.innerHTML = `Clicked at ${Date.now()}`;
  }
}