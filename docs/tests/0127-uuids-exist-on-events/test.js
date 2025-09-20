export default class {
  bittyInit() {
    this.api.querySelector("button").click();
  }
  runTest(event, el) {
    if (event.uuid !== undefined) {
      el.innerHTML = "PASSED";
    }
  }
}
