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

  runTest0080(_event, el) {
    this.#count += 1;
    if (this.#count === 3) {
      el.innerHTML = "PASSED";
    }
  }
}
