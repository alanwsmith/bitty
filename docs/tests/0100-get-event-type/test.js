export default class {
  bittyInit() {
    this.api.querySelector("button").click();
  }
  runTest(event, el) {
    if (event.type === "click") {
      el.innerHTML = "PASSED";
    }
  }
}
