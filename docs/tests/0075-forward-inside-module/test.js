export default class {
  bittyInit() {
    this.api.querySelector("button").click();
  }

  runTest(event, _el) {
    this.api.forward(event, "forwardEvent");
  }

  forwardEvent(event, el) {
    el.innerHTML = "PASSED";
  }
}
