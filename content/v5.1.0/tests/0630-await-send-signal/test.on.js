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

  async runTest0630(_event, el) {
    await new Promise(resolve => setTimeout(resolve, 300));
    console.log("\n\n\n\nhere1\n\n---------------------------------------\n\n\n");
    this.#updated = true;
    el.innerHTML = "FAILED-CHECK";
  }
}


