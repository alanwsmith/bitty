export default class {
  bittyReady() {
    this.api.querySelector("input").click();
  }

  runTest1140(ev, el) {
    if (event.target.floatValue === 1.1) {
      el.innerHTML = "PASSED";
    }
  }
}
