export default class {
  init() {
    const button = document.querySelector("#send-and-receive-test-button");
    button.click();
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
