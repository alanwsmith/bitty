export default class {
  bittyReady() {
    this.api.querySelector("input").click();
  }

  runTest1100(ev, el) {
    if (el.targetIntValue === 9000) {
      el.innerHTML = "PASSED";
    }
  }
}