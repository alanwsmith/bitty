function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default class {
  async bittyInit() {
    await sleep(100) // time pad for test
    this.api.querySelector("button").click();
  }

  runTest0075(event, _el) {
    this.api.forward(event, "forwardEvent0075");
  }

  forwardEvent0075(_event, el) {
    el.innerHTML = "PASSED";
  }
}