function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default class {
  async bittyInit() {
    await sleep(100) // time pad for test
    const els = this.api.querySelectorAll("[data-uuid]");
    [...els].forEach((el) => {
      if (el.dataset.uuid === "original-uuid") {
        el.innerHTML = "PASSED";
      }
    });
  }
}