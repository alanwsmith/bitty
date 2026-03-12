export default class {
  bittyReady() {
    this.api.querySelector("input").click();
  }

  runTest1130(ev, el) {
    if (ev.sender.valueToInt === 9000) {
      ev.target.hidden = true;
      el.innerHTML = "PASSED";
    }
  }
}
