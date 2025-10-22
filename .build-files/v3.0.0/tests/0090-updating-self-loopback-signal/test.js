function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default class {
  async bittyInit() {
    await sleep(100); // time pad for test
    const button = this.api.querySelector("div");
    button.click();
  }
  runTest0090(_event, el) {
    el.innerHTML = "PASSED";
  }
}
