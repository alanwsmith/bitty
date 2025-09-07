export default class {
  init() {
    this.api.querySelector("button").click();
  }
  runTest(el, event) {
    if (event.target.dataset.uuid !== undefined) {
      el.innerHTML = "PASSED";
    }
  }
}
