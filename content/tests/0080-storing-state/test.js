export default class {
  #count = 0;
  bittyInit() {
    this.api.querySelector("button").click();
    this.api.querySelector("button").click();
    this.api.querySelector("button").click();
  }
  runTest(el, event) {
    this.#count += 1;
    if (this.#count === 3) {
      el.innerHTML = "PASSED";
    }
  }
}
