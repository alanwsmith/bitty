export default class {
  bittyReady() {
    this.api.querySelector("input").click();
  }

  runTest1100(ev, el) {
    if (el.targetValInt === 9000) {
      ev.target.hidden = true;
      el.innerHTML = "PASSED";
    }
  }
}