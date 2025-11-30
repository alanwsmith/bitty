export default class {
  bittyReady() {
    this.api.querySelector("input").click();
  }

  runTest1025(ev, el) {
    if (el.val === "1025 string") {
      this.api.localTrigger("markPassed1025");
      el.hidden = true;
    }
  }

  markPassed1025(_, el) {
    el.innerHTML = "PASSED";
  }
}
