export default class {
  #counter = 0;

  runTest1080(_event, el) {
    this.#counter += 1;
    if (this.#counter === 2) {
      el.innerHTML = "FAILED";
    }
  }
}
