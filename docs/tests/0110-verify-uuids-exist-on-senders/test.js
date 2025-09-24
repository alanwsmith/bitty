function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default class {
  async bittyInit() {
    await sleep(100) // time pad for test
    this.api.querySelector("button").click();
  }

  runTest0110(event, el) {
    if (event.target.dataset.uuid !== undefined) {
      el.innerHTML = "PASSED";
    }
  }
}
