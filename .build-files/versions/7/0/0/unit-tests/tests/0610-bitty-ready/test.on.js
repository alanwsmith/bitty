export default class {
  #updated = false;

  bittyReady() {
    this.#updated = true;
    this.api.querySelector("button").click();
  }

  runTest0610(_event, el) {
    if (this.#updated === true) {
      el.innerHTML = "PASSED";
    }
  }
}
