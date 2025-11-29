export default class {
  #problems = 0;

  bittyReady() {
    this.api.querySelector("div").click();
  }

  runTest1350(_ev, el) {
    if (el.senderBittyId !== el.bittyId) {
      this.#problems += 1;
    }
    if (this.#problems === 0) {
      el.innerHTML = "PASSED";
    }
  }
}
