export default class {
  #updated = false;

  bittyReady() {
    this.api.querySelector("button").click();
  }

  checkTest0630(_event, el) {
    if (this.#updated === true) {
      el.innerHTML = "PASSED";
    }
  }

  runTest0630(_event, _el) {
    //  await new Promise((resolve) => setTimeout(resolve, 300));
    this.#updated = true;
  }
}