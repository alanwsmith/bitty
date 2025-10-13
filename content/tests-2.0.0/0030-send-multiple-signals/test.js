function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default class {
  async bittyInit() {
    await sleep(100) // time pad for test
    this.api.querySelector("button").click();
  }
  runTestAlfa0030(_event, el) {
    el.innerHTML = "PASSED";
  }
  runTestBravo0030(_event, el) {
    el.innerHTML = "PASSED";
  }
  runTestCharlie0030(_event, el) {
    el.innerHTML = "PASSED";
  }
}
