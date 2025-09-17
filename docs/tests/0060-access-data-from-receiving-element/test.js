export default class {
  bittyInit() {
    this.api.querySelector("button").click();
  }
  runTest(el, event) {
    el.innerHTML = el.dataset.status;
  }
}
