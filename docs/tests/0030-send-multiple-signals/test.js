function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default class {
  async bittyInit() {
    await sleep(100) // time pad for test
    this.api.querySelector("button").click();
  }
  runTestAlfa(_event, el) {
    el.innerHTML = "PASSED";
  }
  runTestBravo(_event, el) {
    el.innerHTML = "PASSED";
  }
  runTestCharlie(_event, el) {
    el.innerHTML = "PASSED";
  }
}
