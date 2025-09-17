export default class {
  bittyInit() {
    this.api.querySelector("button").click();
  }
  runTest(event, el) {
    if (el.dataset.uuid !== undefined) {
      el.innerHTML = "PASSED";
    }
  }
}
