function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default class {
  async bittyInit() {
    await sleep(100) // time pad for test
    this.api.querySelector("button").click();
  }

  runTest(event, _el) {
    this.api.forward(event, "forwardEvent");
  }

  forwardEvent(event, el) {
    el.innerHTML = "PASSED";
  }
}
