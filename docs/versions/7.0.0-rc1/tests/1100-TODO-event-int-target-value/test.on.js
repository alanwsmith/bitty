export default class {
  bittyReady() {
    this.api.querySelector("input").click();
  }

  runTest1100(ev, el) {
    if (event.target.intValue === 9000) {
      el.innerHTML = "PASSED";
    }
  }
}