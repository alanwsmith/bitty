export default class {
  bittyReady() {
    this.api.querySelector("input").click();
  }

  runTest1140(ev, el) {
    if (el.sender.valueToFloat === 1.1) {
      ev.target.hidden = true;
      el.innerHTML = "PASSED";
    }
  }
}
