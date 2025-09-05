export default class {
  init() {
    const button = document.querySelector("#send-and-receive-test-button");
    button.click();
  }

  runTest(el, _event) {
    el.innerHTML = "PASSED";
  }
}
