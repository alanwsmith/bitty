function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

window.BittyDocTestRunner = class {
  async bittyReady() {
    await sleep(300);
    // this.api.localTrigger("restTesults");
  }

  testResults(_, el) {
  }
};
