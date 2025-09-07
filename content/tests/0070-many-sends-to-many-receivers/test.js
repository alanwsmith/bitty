export default class {
  init() {
    this.api.querySelector("button").click();
  }
  runTestAlfa(el, event) {
    el.innerHTML = "PASSED";
  }
  runTestBravo(el, event) {
    el.innerHTML = "PASSED";
  }
  runTestCharlie(el, event) {
    el.innerHTML = "PASSED";
  }
}
