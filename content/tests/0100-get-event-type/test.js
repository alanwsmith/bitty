export default class {
  init() {
    this.api.querySelector("button").click();
  }
  runTest(el, event) {
    if (event.type === "click") {
      el.innerHTML = "PASSED";
    }
  }
}
