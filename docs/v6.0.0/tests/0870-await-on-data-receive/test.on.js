function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default class {
  async runTest0870Alfa(_event, el) {
    await sleep(300);
    el.innerHTML = "FAILED_ALFA";
  }
  runTest0870Bravo(_event, el) {
    el.innerHTML = "PASSED";
  }
}