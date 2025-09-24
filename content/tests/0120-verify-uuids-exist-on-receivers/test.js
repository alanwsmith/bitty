function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default class {
  async bittyInit() {
    await sleep(100) // time pad for test
    this.api.querySelector("button").click();
  }

  runTest0120(_event, element) {
    if (element.dataset.uuid !== undefined) {
      element.innerHTML = "PASSED";
    }
  }
}
