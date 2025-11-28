export default class {
  bittyReady() {
    this.api.querySelector("input").click();
  }

  runTest1130(ev, el) {
    if (el.senderIntValue === 9000) {
      ev.target.hidden = true;
      el.innerHTML = "PASSED";
    }
  }
}
