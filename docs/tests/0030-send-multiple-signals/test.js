export default class {
  bittyInit() {
    this.api.querySelector("button").click();
  }
  runTestAlfa(_event, el) {
    el.innerHTML = "PASSED";
  }
  runTestBravo(_event, el) {
    el.innerHTML = "PASSED";
  }
  runTestCharlie(_event, el) {
    el.innerHTML = "PASSED";
  }
}
