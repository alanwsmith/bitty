export default class {
  bittyInit() {
    this.api.querySelector("button").click();
  }
  runTest(event, el) {
    if (event.target.dataset.uuid !== undefined) {
      el.innerHTML = "PASSED";
    }
  }
}
