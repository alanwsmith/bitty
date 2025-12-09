function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default class {
  bittyReady() {
    this.api.trigger("await:runTest0870Alfa runTest0870Bravo");
  }

  async runTest0870Alfa(_event, el) {
    console.log("HERE1");
    await sleep(300);
    console.log("HERE2");
    el.innerHTML = "FAILED_ALFA";
  }

  runTest0870Bravo(_event, el) {
    if (el.innerHTML === "FAILED_ALFA") {
    console.log("HERE3");
      el.innerHTML = "PASSED";
    console.log("HERE4");
    }
  }
}
