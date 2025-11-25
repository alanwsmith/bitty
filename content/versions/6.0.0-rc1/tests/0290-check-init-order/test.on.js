export default class {
  #textString = "FAILED";

  bittyReady() {
    this.api.trigger("runTest0290");
  }

  bittyInit() {
    this.#textString = "PASSED";
  }

  runTest0290(_event, el) {
    el.innerHTML = this.#textString;
  }
}
