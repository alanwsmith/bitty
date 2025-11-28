export default class {
  bittyReady() {
    this.api.querySelector("input").click();
  }

  runTest1110(ev, el) {
    if (event.target.floatValue === 1.1) {
      el.innerHTML = "PASSED";
    }
  }
}