function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default class {
  async runTest0860Alfa(_event, el) {
    await sleep(300);
    el.innerHTML = "PASSED";
  }
  runTest0860Bravo(_event, el) {
    el.innerHTML = "FAILED_BRAVO";
  }
}