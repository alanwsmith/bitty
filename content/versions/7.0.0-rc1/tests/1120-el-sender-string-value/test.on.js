export default class {
  bittyReady() {
    this.api.querySelector("input").click();
  }

  runTest1120(ev, el) {
    if (el.senderStringValue === "target string") {
      el.innerHTML = "PASSED";
    }
  }
}
