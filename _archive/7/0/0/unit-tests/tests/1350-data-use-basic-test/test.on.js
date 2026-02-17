export default class {
  #updates = 0;

  bittyReady() {
    this.api.querySelectorAll("div").forEach((el) => {
      el.click();
    });
  }

  runTest1350(ev, el) {
    this.#updates += 1;
    if (this.#updates <= 3) {
      el.innerHTML = "PASSED";
    } else {
      el.innerHTML = "FAILED";
    }
  }
}
