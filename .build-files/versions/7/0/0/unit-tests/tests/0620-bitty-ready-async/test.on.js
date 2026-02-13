function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default class {
  #updated = false;

  async bittyReady() {
    this.#updated = true;
    await sleep(100);
    this.api.querySelector("button").click();
  }

  runTest0620(_event, el) {
    if (this.#updated === true) {
      el.innerHTML = "PASSED";
    }
  }
}

