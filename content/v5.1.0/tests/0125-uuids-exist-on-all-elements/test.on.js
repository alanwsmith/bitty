function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default class {
  async bittyInit() {
    await sleep(100) // time pad for test
    const el = this.api.querySelector("div");
    if (el.dataset.bittyid) {
      el.innerHTML = "PASSED";
    }
  }
}
