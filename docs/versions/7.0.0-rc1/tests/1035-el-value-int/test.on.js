export default class {
  bittyReady() {
    this.api.querySelector("input").click();
  }

  runTest1035(ev, el) {
    if (el.valueInt === 7878) {
      this.api.localTrigger("markPassed1035");
      el.hidden = true;
    }
  }

  markPassed1035(_, el) {
    el.innerHTML = "PASSED";
  }
}