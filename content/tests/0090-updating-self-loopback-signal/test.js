export default class {
  bittyInit() {
    const button = this.api.querySelector("button");
    const statusDiv = this.api.querySelector("div");
    button.click();
    if (button.innerHTML === "PASSED") {
      statusDiv.innerHTML = "";
    }
  }
  runTest(event, el) {
    el.innerHTML = "PASSED";
  }
}
