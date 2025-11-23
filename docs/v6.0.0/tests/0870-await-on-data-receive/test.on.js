function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default class {
  bittyReady() {
    this.api.trigger("runTest0870Alfa runTest0870Bravo");
  }
  async runTest0870Alfa(_event, el) {
    await sleep(300);
    el.innerHTML = "FAILED_ALFA";
  }
  runTest0870Bravo(_event, el) {
    el.innerHTML = "PASSED";
  }
}