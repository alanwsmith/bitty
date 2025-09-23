export default class {
  bittyInit() {
    const button = this.api.querySelector("button");
    button.click();
  }
  runTest(event, el) {
    el.innerHTML = "PASSED";
  }
}
