export default class {
  init() {
    this.api.querySelector("button").click();
  }
  runTestAlfa(el, _event) {
    el.innerHTML = "PASSED";
  }
  runTestBravo(el, _event) {
    el.innerHTML = "PASSED";
  }
  runTestCharlie(el, _event) {
    el.innerHTML = "PASSED";
  }
}
