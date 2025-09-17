export default class {
  bittyInit() {
    this.api.querySelector("button").click();
  }
  runTest(el, event) {
    if (event.target.dataset.uuid !== undefined) {
      el.innerHTML = "PASSED";
    }
  }
}
