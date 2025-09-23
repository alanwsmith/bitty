function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default class {
  async bittyInit() {
    await sleep(100) // time pad for test
    this.api.querySelector("button").click();
  }
  runTestAlfa(event, el) {
    el.innerHTML = "PASSED";
  }
  runTestBravo(event, el) {
    el.innerHTML = "PASSED";
  }
  runTestCharlie(event, el) {
    el.innerHTML = "PASSED";
  }
}
