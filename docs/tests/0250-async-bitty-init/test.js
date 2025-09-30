function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default class {
  async bittyInit() {
    await sleep(100);
    const el = this.api.querySelector("div");
    el.innerHTML = "PASSED";
  }
}