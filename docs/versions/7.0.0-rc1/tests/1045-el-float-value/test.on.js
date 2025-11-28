export default class {
  bittyReady() {
    this.api.querySelector("input").click();
  }

  runTest1045(ev, el) {
    if (el.floatValue === 123.456) {
      this.api.localTrigger("markPassed1045");
      el.hidden = true;
    }
  }

  markPassed1045(_, el) {
    el.innerHTML = "PASSED";
  }
}