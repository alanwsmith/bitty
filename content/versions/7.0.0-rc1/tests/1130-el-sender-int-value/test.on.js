export default class {
  bittyReady() {
    this.api.querySelector("input").click();
  }

  runTest1130(ev, el) {
    if (el.senderIntValue === 9000) {
      el.innerHTML = "PASSED";
    }
  }
}
