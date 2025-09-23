function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default class {
  #count = 0;
  async bittyInit() {
    await sleep(100) // time pad for test
    this.api.querySelector("button").click();
    this.api.querySelector("button").click();
    this.api.querySelector("button").click();
  }
  runTest(event, el) {
    this.#count += 1;
    if (this.#count === 3) {
      el.innerHTML = "PASSED";
    }
  }
}
