export default class {
  init() {
    this.api.querySelector("button").click();
  }
  runTest(el, event) {
    el.innerHTML = event.target.dataset.status;
  }
}
