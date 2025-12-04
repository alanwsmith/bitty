export default class {
  bittyReady() {
    this.api.querySelector("input").click();
  }

  runTest1130(ev, el) {
    if (event.sender.intValue === 9000) {
      el.innerHTML = "PASSED";
    }
  }
}
