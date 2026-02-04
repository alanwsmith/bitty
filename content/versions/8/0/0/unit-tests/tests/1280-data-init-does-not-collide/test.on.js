export default class {
  #counter = 0;

  runTest1280(ev, el) {
    this.#counter += 1;
    if (this.#counter <= 3) {
      el.innerHTML = "PASSED";
    }
  }
}
