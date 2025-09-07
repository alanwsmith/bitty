export default class {
  init() {
    this.api.querySelector("button").click();
  }
  runTest(el, event) {
    if (el.dataset.uuid !== undefined) {
      el.innerHTML = "PASSED";
    }
  }
}
