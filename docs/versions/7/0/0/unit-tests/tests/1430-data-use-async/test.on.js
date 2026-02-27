function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default class {
  #status = "FAILED";

  bittyReady() {
    this.api.querySelector(".clickme1430").click();
  }

  async runTest1430Alfa(ev, el) {
    await sleep(300);
    this.#status = "PASSED";
  }

  runTest1430Bravo(ev, el) {
    el.innerHTML = this.#status;
  }

}