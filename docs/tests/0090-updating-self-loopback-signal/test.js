export default class {
  init() {
    const button = this.api.querySelector("button");
    const statusDiv = this.api.querySelector("div");
    button.click();
    if (button.innerHTML === "PASSED") {
      statusDiv.innerHTML = "";
    }
  }
  runTest(el, event) {
    el.innerHTML = "PASSED";
  }
}
