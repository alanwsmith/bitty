export default class {
  init() {
    this.api.querySelector("button").click();
  }

  runTest(el, _event) {
    el.innerHTML = "PASSED";
  }
}
